import React, { useEffect } from "react";
import "./docs.css";
import { store } from "../../store";
import { changeCurrentPage } from "../../features/page/pageSlice";
import Heading from "../iettaComponents/heading/Heading";
import SubHeading from "../iettaComponents/subHeading/SubHeading";
import Content from "../iettaComponents/content/Content";
import doc1 from "../../images/doc1.png";
import doc3 from "../../images/doc3.png";
import doc4 from "../../images/doc4.png";
import doc5 from "../../images/doc5.png";
import doc6 from "../../images/doc6.png";
import doc7 from "../../images/doc7.png";
import doc8 from "../../images/doc8.png";
import doc9 from "../../images/doc9.png";
import doc10 from "../../images/doc10.png";
import doc11 from "../../images/doc11.png";
import doc12 from "../../images/doc12.png";
import doc13 from "../../images/doc13.png";
import doc14 from "../../images/doc14.png";
import {
    addTagsDocs,
    addTagsHead,
    createProjectDocs,
    createProjectHead,
    deletingProjectDocs,
    deletingProjectHead,
    editor,
    featuresInEditor,
    featuresInEditorDocs,
    homeGraphDocs,
    homeGraphhead,
    importExportProjectDocs,
    importExportProjectHead,
    multipleWordTag,
    multipleWordTagDocs,
    projectPageDocs,
    projectPageHead,
    removingTag,
    removingTagDocs,
    singleWordTag,
    singleWordTagDocs,
    titleBarMenuDocs,
    titleBarMenuEditor,
    titleBarMenuEditorDocs,
    titleBarMenuHead,
    uploadingFileDocs,
    uploadingFileHead
} from "../../resources/constants";

export default function Docs() {
    useEffect(() => {
        store?.dispatch(changeCurrentPage('Docs'))
    })
    return <>
        <div className="otr-docs">
            <div className="inr-docs w3-animate-right">
                <Heading
                    text={"User's Perspective"}
                    underlineSize={"65%"}
                />
                <SubHeading
                    text={homeGraphhead}
                    underlineSize={"50%"}
                />
                <div className="doc-segment">
                    <Content
                        text={homeGraphDocs}
                    />
                    <img
                        src={doc1}
                        alt="doc-1"
                        className="doc-img"
                    />
                </div>
                <SubHeading
                    text={projectPageHead}
                    underlineSize={"50%"}
                />
                <div className="doc-segment">
                    <Content
                        text={projectPageDocs}
                    />
                    <img
                        src={doc3}
                        alt="doc-2"
                        className="doc-img"
                    />
                </div>
                <SubHeading
                    text={createProjectHead}
                    underlineSize={"50%"}
                />
                <div className="doc-segment">
                    <Content
                        text={createProjectDocs}
                    />
                    <img
                        src={doc5}
                        alt="doc-2"
                        className="doc-img"
                    />
                </div>
                <SubHeading
                    text={titleBarMenuHead}
                    underlineSize={"50%"}
                />
                <div className="doc-segment">
                    <Content
                        text={titleBarMenuDocs}
                    />
                    <img
                        src={doc4}
                        alt="doc-2"
                        className="doc-img"
                    />
                    <img
                        src={doc6}
                        alt="doc-2"
                        className="doc-img"
                    />
                </div>
                <SubHeading
                    text={importExportProjectHead}
                    underlineSize={"50%"}
                />
                <div className="doc-segment">
                    <Content
                        text={importExportProjectDocs}
                    />
                </div>
                <SubHeading
                    text={addTagsHead}
                    underlineSize={"50%"}
                />
                <div className="doc-segment">
                    <Content
                        text={addTagsDocs}
                    />
                    <img
                        src={doc7}
                        alt="doc-2"
                        className="doc-img"
                    />
                </div>
                <SubHeading
                    text={deletingProjectHead}
                    underlineSize={"50%"}
                />
                <div className="doc-segment">
                    <Content
                        text={deletingProjectDocs}
                    />
                    <img
                        src={doc8}
                        alt="doc-2"
                        className="doc-img"
                    />
                </div>
                <SubHeading
                    text={uploadingFileHead}
                    underlineSize={"50%"}
                />
                <div className="doc-segment">
                    <Content
                        text={uploadingFileDocs}
                    />
                    <img
                        src={doc9}
                        alt="doc-2"
                        className="doc-img"
                    />
                </div>
                <Heading
                    text={editor}
                    underlineSize={"45%"}
                />
                <SubHeading
                    text={featuresInEditor}
                    underlineSize={"50%"}
                />
                <div className="doc-segment">
                    <Content
                        text={featuresInEditorDocs}
                    />
                    <img
                        src={doc10}
                        alt="doc-1"
                        className="doc-img"
                    />
                </div>
                <SubHeading
                    text={titleBarMenuEditor}
                    underlineSize={"50%"}
                />
                <div className="doc-segment">
                    <Content
                        text={titleBarMenuEditorDocs}
                    />
                    <img
                        src={doc13}
                        alt="doc-1"
                        className="doc-img"
                    />
                </div>
                <SubHeading
                    text={singleWordTag}
                    underlineSize={"50%"}
                />
                <div className="doc-segment">
                    <Content
                        text={singleWordTagDocs}
                    />
                    <img
                        src={doc11}
                        alt="doc-1"
                        className="doc-img"
                    />
                </div>
                <SubHeading
                    text={multipleWordTag}
                    underlineSize={"50%"}
                />
                <div className="doc-segment">
                    <Content
                        text={multipleWordTagDocs}
                    />
                    <img
                        src={doc12}
                        alt="doc-1"
                        className="doc-img"
                    />
                </div>
                <SubHeading
                    text={removingTag}
                    underlineSize={"50%"}
                />
                <div className="doc-segment">
                    <Content
                        text={removingTagDocs}
                    />
                    <img
                        src={doc14}
                        alt="doc-1"
                        className="doc-img"
                    />
                </div>
            </div>
        </div>
    </>
};
