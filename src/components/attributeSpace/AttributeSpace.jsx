import React, { useState } from 'react'
import "./attributespace.css"
import IettaLabel from '../iettaComponents/IettaLabel'
import IettaInputField from '../iettaComponents/IettaInputField'
import IettaButton from "../iettaComponents/IettaButton"
import { useSelector } from 'react-redux'
import { colors } from '../../resources/constants'
import Fetch from '../../resources/fetch'
import apiRoutes from '../../resources/apiUrls'
import { store } from '../../store'
import { changesMade } from '../../features/page/pageSlice'
import DoneAllIcon from '@mui/icons-material/DoneAll';

export default function AttributeSpace({ pageNumber, totalPages, changePageNo }) {
    const [numberBox, setNumberBox] = useState({
        pageNumberBox: ""
    })
    const tags = useSelector((state) => state?.project?.projectTags)
    const changes = useSelector((state) => state?.page?.annotationChanges)
    function fetchDesiredPage(e) {
        e.preventDefault();
        const desiredPage = parseInt(numberBox.pageNumberBox);
        setNumberBox("")
        if (desiredPage >= 1 && desiredPage <= totalPages) {
            changePageNo(desiredPage - 1)
        }
    }
    const fileName = useSelector(state => state.project.fileSelected);
    const projectName = useSelector(state => state.project.projectName);
    const fileContentTags = useSelector(state => state?.page?.currentPageAnnotations)
    const createURL = () => {
        return apiRoutes.UPDATE_ANNOTATIONS +
            `?fileName=${fileName}`
            + `&projectName=${projectName}`
            + `&pageNumber=${pageNumber - 1}`;
    }
    const saveAnnotations = () => {
        Fetch(createURL(), "post", JSON.stringify({
            updatedAnnotations: fileContentTags
        }), "json").then(
            response => {
                return store.dispatch(changesMade(false))
            }
        )
    }
    return (
        <>
            <div className="wp-main-attribute w3-animate-right">
                <div className="wp-otr-attribute">
                    <IettaLabel labelName={"Tags"} labelCssClass={"attribute-label"} />
                    <hr className='wp-hr-att' />
                    <div className='wp-tags'>
                        {tags.map((tag, index) =>
                            <span key={index} className='span-tag' style={{ backgroundColor: colors[index % 7] }}>
                                <sup className='span-tag-sp'>{index + 1}</sup>
                                {tag.replaceAll("_", " ")}
                            </span>)}
                    </div>
                    <hr className='wp-hr-att' />
                </div>
                <div className="wp-otr-save">
                    <div className="wp-inr-attribute-btn">
                        {changes ?
                            <IettaButton buttonText="Save"
                                buttonCssClass={"attribute-save-btn w3-animate-zoom"}
                                buttonOnClick={saveAnnotations}
                            />
                            : <>
                                <DoneAllIcon className='w3-animate-zoom' style={{ color: 'var(--theme-color)', fontSize: 30 }} />
                            </>
                        }
                    </div>
                </div>
                <form action='' onSubmit={fetchDesiredPage}>
                    <div className="wp-pagination-buttons">
                        <div className="page-details">
                            <IettaInputField placeHolder={pageNumber}
                                inputName={"pageNumberBox"}
                                inputType={"number"}
                                inputId={"pageNumberBox"}
                                inputValue={numberBox}
                                setFunction={setNumberBox}
                                inputCssClass={"page-number-box"}
                            />
                            <span className="total-pages">/{totalPages}</span>
                        </div>
                        <IettaButton buttonText={"Jump to Page"}
                            buttonCssClass={"fetch-page-btn"}
                        />
                    </div>
                </form>
            </div>
        </>
    )

};
