import React from 'react'
import "./annotationspace.css"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SpanElement from './spanElement/SpanElement';
import { useSelector } from 'react-redux';
import { IOB, colors } from '../../resources/constants';

export default function AnnotationSpace({
    setMenu,
    onClickLeftPage,
    onClickRightPage,
}) {
    const tags = useSelector(state => state?.project?.projectTags)
    const fileContent = useSelector(state => state?.page?.currentPageContent)
    const fileContentTags = useSelector(state => state?.page?.currentPageAnnotations)
    const IOBClassifier = (letter, indexOfSup) => {
        return {
            className: {
                ...{ ...IOB?.[letter] },
                borderLeftColor: colors[indexOfSup % 7],
                borderRightColor: colors[indexOfSup % 7],
                borderTopColor: colors[indexOfSup % 7],
                borderBottomColor: colors[indexOfSup % 7],
            }, letter
        };
    }
    const annotator = (index, element, lineIndex) => {
        let correspondingTag = fileContentTags?.[lineIndex]?.split(" ")?.[index];
        let tokenizedTag = [];
        if (correspondingTag === "O")
            tokenizedTag = ["O", "O"];
        else
            tokenizedTag = correspondingTag?.split("-");
        const supNumber = tags.indexOf(tokenizedTag?.[1]);
        return (
            <SpanElement
                key={index}
                wordIndex={index}
                text={element}
                setMenu={setMenu}
                isSup={supNumber !== -1}
                lineIndex={lineIndex}
                indexOfSup={supNumber}
                IOB={IOBClassifier(tokenizedTag?.[0], supNumber)} />
        )
    }
    return (
        <>
            <div className="wp-otr-annotation w3-animate-right" onClick={() => { setMenu({ isDisplayed: false }) }}>
                <div className="wp-annotation-text" id="annotate-text">
                    {fileContent && fileContent?.map((line, lineIndex) => {
                        return <React.Fragment key={lineIndex}>
                            {line?.split(" ")?.map(
                                (element, index) => annotator(index, element, lineIndex)
                            )}
                            <br />
                        </React.Fragment>
                    })}
                </div>
                <div className="wp-pagination-icons">
                    <NavigateBeforeIcon className='pagination-icons' style={{ fontSize: 35 }} onClick={onClickLeftPage} />
                    <NavigateNextIcon className='pagination-icons' style={{ fontSize: 35 }} onClick={onClickRightPage} />
                </div>
            </div>
        </>
    )

};
