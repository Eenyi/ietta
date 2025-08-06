import React, { useEffect } from 'react'
import { useState } from 'react';
import "./editor.css"
import Titlebar from '../../components/titlebar/Titlebar';
import AnnotationSpace from '../../components/annotationSpace/AnnotationSpace';
import AttributeSpace from '../../components/attributeSpace/AttributeSpace';
import EditorNavbar from '../../components/editorNavbar/EditorNavbar';
import ContextMenu from '../../components/contextMenu/ContextMenu';
import { useSelector } from 'react-redux';
import { store } from './../../store';
import Alert from '../../components/alert/Alert';
import { changeCurrentPage, changesMade, setCurrentPageAnnotations, setCurrentPageContent } from '../../features/page/pageSlice';
import apiRoutes from '../../resources/apiUrls';
import Fetch from "./../../resources/fetch";
import { showAlert } from '../../features/alert/alertSlice';
import { changesLostTopic, changesLostText } from '../../resources/constants';

export default function Editor({ filename }) {
    const alertDisplay = useSelector(state => state?.alert?.alertDisplay)
    const changes = useSelector(state => state?.page?.annotationChanges)
    let [PAGE_NO, changePageNo] = useState(0)
    const [menu, setMenu] = useState({
        clientX: 0,
        text: "",
        tags: [],
        clientY: 0,
        isDisplayed: false,
        lineNumber: -1,
        wordNumber: -1,
    });
    const [visibility, setVisibility] = useState({
        addTag: false,
        titleMenu: false,
        deleteProject: false
    });
    const [filePages, setFilePages] = useState(0);
    const fileName = useSelector(state => state.project.fileSelected);
    const projectName = useSelector(state => state.project.projectName);
    const createURL = () => {
        return apiRoutes.FILE +
            `?fileName=${fileName}`
            + `&projectName=${projectName}`
            + `&pageNumber=${PAGE_NO}`;
    }
    const fetchPages = () => {
        Fetch(createURL(), "get").then(
            response => {
                store.dispatch(setCurrentPageContent(response?.success?.lines))
                store.dispatch(setCurrentPageAnnotations(response?.success?.tagLines))
                setFilePages(response?.totalPages)
            }
        )
    }
    useEffect(() => {
        store.dispatch(changeCurrentPage(fileName))
        fetchPages();
        if (changes) {
            store.dispatch(showAlert({
                alertDisplay: true,
                alertTopic: changesLostTopic,
                alertText: changesLostText
            }))
            store.dispatch(changesMade(false))
        }
    }, [PAGE_NO]);
    const getPreviousPage = () => {
        if (PAGE_NO - 1 >= 0) {
            changePageNo(PAGE_NO - 1)
        }
    }
    const getNextPage = () => {
        if (PAGE_NO + 2 <= filePages) {
            changePageNo(PAGE_NO + 1)
        }
    }
    return (
        <>
            {alertDisplay && <Alert />}
            {menu.isDisplayed && <ContextMenu menuDetails={menu} setMenu={setMenu} />}
            <div className="wp-otr-editor">
                <div className="wp-inr-editor w3-animate-zoom">
                    <EditorNavbar />
                </div>
                <div className="wp-inr-editor w3-animate-right">
                    <Titlebar visibility={visibility} setVisibility={setVisibility} />
                    <div className="wp-inr-editor-comps w3-animate-right"
                        onClick={() => { setVisibility({ titleMenu: false }) }}>
                        <AnnotationSpace
                            setMenu={setMenu}
                            //fileContent={fileContent}
                            //fileContentTags={fileContentTags}
                            onClickLeftPage={getPreviousPage}
                            onClickRightPage={getNextPage}
                        />
                        <AttributeSpace pageNumber={PAGE_NO + 1} totalPages={filePages} changePageNo={changePageNo} />
                    </div>
                </div>
            </div>
        </>
    )
};