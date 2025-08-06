import React, { useState } from "react";
import "./deleteproject.css";
import IettaButton from "../iettaComponents/IettaButton";
import { useSelector } from "react-redux";
import apiRoutes from "../../resources/apiUrls";
import Fetch from "../../resources/fetch";
import { useNavigate } from "react-router";
import { store } from "../../store"
import { showAlert } from "../../features/alert/alertSlice";
import { deleteTopic } from "../../resources/constants";

export default function DeleteProject({ setVisibility }) {
    const projectName = useSelector(state => state?.project?.projectName)
    const [isChecked, setIsChecked] = useState(false);
    const history = useNavigate()
    const createURL = () => {
        return apiRoutes.DELETE_PROJECT +
            `?projectName=${projectName}`;
    }
    function deleteProject(e) {
        e.preventDefault();
        Fetch(createURL(), "get").then(
            response => {
                if (response?.status) {
                    setVisibility()
                    store.dispatch(showAlert({
                        alertDisplay: true,
                        alertTopic: deleteTopic,
                        alertText: response?.description
                    }))
                    return history('/dashboard/projects')
                }
                else {
                    setVisibility()
                    store.dispatch(showAlert({
                        alertDisplay: true,
                        alertTopic: deleteTopic,
                        alertText: response?.status?.error
                    }))
                }
            }
        )
    }
    return <>
        <div className="wp-otr-del-proj">
            <div className="wp-inr-del-proj w3-animate-zoom">
                <div className="wp-inr-top-del">
                    {/* <ReportProblemIcon style={{ fontSize: 30 }} /> */}
                    <span className="alert-text">Do you really want to delete this project?</span>
                </div>
                <hr className='wp-hr-del' />
                <div className="wp-inr-del-text">
                    <span className="caution-text">Remember that after deleting the project.
                        You won't be able to recover it.
                        All Files, Tags and Annotated data will be lost.</span>
                </div>
                <hr className='wp-hr-del' />
                <div className="wp-checkbox">
                    <span className="check-text">I understand the risk</span>
                    {/*Used simple HTML input because IettaInputField giving 
                       unexpected behavior, shows tick mark after being clicked 
                       twice, but changes value on single click */}
                    <input type="checkbox" value={isChecked} onChange={() => { setIsChecked(current => !current) }} />
                </div>
            </div>
            <div className="wp-del-btn">
                {isChecked ? <IettaButton buttonText={"Delete"}
                    buttonCssClass={"delete-btn w3-animate-zoom"}
                    buttonOnClick={deleteProject} /> : <></>}
                <IettaButton buttonText={"Cancel"}
                    buttonCssClass={"attribute-save-btn cancel-btn w3-animate-zoom"}
                    buttonOnClick={setVisibility} />
            </div>
        </div>
    </>
};
