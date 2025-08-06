import "./titlebarmenu.css";
import React, { useRef } from "react";
import ContextMenuItem from "../contextMenu/ContextMenuItem/ContextMenuItem";
import { useSelector } from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
import apiRoutes from "../../resources/apiUrls";
import Fetch from "../../resources/fetch";
import { saveAs } from "file-saver";
import IettaInputField from '../iettaComponents/IettaInputField'
import { setProjectList } from "../../features/project/projectSlice";
import { store } from "../../store";
import { showAlert } from "../../features/alert/alertSlice";
import { projectExtension, importTopic } from "../../resources/constants";

export default function TitleBarMenu({
    x,
    y,
    setVisibility,
    setDeleteVisibility,
    handleMenu
}) {
    const currentPage = useSelector(state => state?.page?.currentPage)
    const projectName = useSelector(state => state?.project?.projectName)
    const projetList = useSelector(state => state?.project?.projectList)
    const divStyle = {
        top: y,
        left: x,
    };
    var importedProject = useRef(null);
    function uploadHandler() {
        let formData = new FormData();
        formData.append("project", importedProject?.current?.files?.[0])
        if (importedProject?.current?.files?.[0] !== undefined) {
            Fetch(apiRoutes.IMPORT_EXPORT, "post", formData).then(
                (response) => {
                    handleMenu()
                    if (response?.status?.status) {
                        store.dispatch(setProjectList([...projetList, response?.project]))
                        store.dispatch(showAlert({
                            alertDisplay: true,
                            alertTopic: importTopic,
                            alertText: response?.status?.description
                        }))
                    }
                    else {
                        store.dispatch(showAlert({
                            alertDisplay: true,
                            alertTopic: importTopic,
                            alertText: response?.status?.error
                        }))
                    }
                }
            )
        }
    }
    const createURL = () => {
        return apiRoutes.IMPORT_EXPORT +
            `?projectName=${projectName}`;
    }
    function exportProject(e) {
        e.preventDefault();
        Fetch(createURL(), "get", null, "form", "zip").then(
            blob => {
                saveAs(blob, `${projectName}${projectExtension}`);
            }
        )
    }
    return (
        <>
            {currentPage !== 'Docs'
                && currentPage !== 'Setup' ?
                <div
                    className="wp-file-c-m w3-animate-zoom"
                    style={divStyle}
                >
                    <div className="close-icon">
                        <ContextMenuItem
                            itemName={
                                <CloseIcon
                                    style={{ fontSize: 16 }}
                                />
                            }
                            onclick={handleMenu}
                        />
                    </div>
                    {currentPage === "Home" || currentPage === "Projects" ? <>
                        <ContextMenuItem itemName={
                            <IettaInputField
                                inputCssClass={"imported-project"}
                                inputType={"file"}
                                inputName={"importedProject"}
                                acceptsOnly={projectExtension}
                                ifRequired={"required"}
                                reference={importedProject}
                                onChange={uploadHandler}
                            />
                        } />
                    </>
                        : <>
                        </>}
                    {currentPage !== 'Home'
                        && currentPage !== 'Projects'
                        && currentPage !== 'Docs'
                        && currentPage !== 'Setup' ? <>
                        <ContextMenuItem
                            itemName={"Add Tags"}
                            onclick={setVisibility}
                        />
                        <ContextMenuItem
                            itemName={"Export Project"}
                            onclick={exportProject}
                        />
                        <ContextMenuItem
                            itemName={"Delete Project"}
                            onclick={setDeleteVisibility}
                        />
                    </>
                        : <>
                        </>
                    }
                </div> : <></>}
        </>
    );
}