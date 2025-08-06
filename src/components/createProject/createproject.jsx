import React, { useState } from "react"
import "./createproject.css"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import IettaButton from "../iettaComponents/IettaButton"
import IettaInputField from "../iettaComponents/IettaInputField"
import IettaLabel from "../iettaComponents/IettaLabel";
import { Link } from "react-router-dom";
import Fetch from "../../resources/fetch";
import apiRoutes from "../../resources/apiUrls";
import { proceedingGreeting, proceedingbody, proceedingStatus, failureGreeting, failureStatus } from "../notifyToggle/String";
export default function Createproject({ setNotification, setResponse }) {
    const [project, setProject] = useState({ "name": "", "tags": "" });
    function submitProject(e) {
        e.preventDefault();
        setNotification(null);
        setNotification(true);
        setResponse({
            status: proceedingStatus,
            body: proceedingbody,
            greeting: proceedingGreeting
        })
        let tags = [];
        project.tags.split(",").forEach(e => tags.push(e.trim()))
        tags?.forEach((tag, index) => tags[index] = tag?.replaceAll(" ", "_"))
        let createdProject = { ...project, "tags": tags, "files": [] };
        Fetch(apiRoutes.PROJECT, "post", JSON.stringify({
            // "auth_token":localStorage.getItem("ietta_access_token"),
            "project": createdProject
        }), "json").then(
            (response) => {
                if (response["status"]) {
                    setNotification(false);
                    return window.location.replace("/dashboard/projects");
                }
                else {
                    return setResponse({
                        status: failureStatus,
                        body: response["error"],
                        greeting: failureGreeting
                    })
                }
            }
        )
    }
    return (
        <>
            <div className="wp-otr-cp w3-animate-right">
                <div className="wp-top-cp w3-animate-zoom">
                    <span className="wp-head-cp">Create Project</span>
                </div>
                <form className="wp-form-cp w3-animate-zoom" action="" method="post" onSubmit={submitProject}>
                    <div className="wp-mid-cp w3-animate-zoom">
                        <div className="wp-1-col">
                            <IettaInputField inputCssClass={"signUpform-input-style"} inputType={"text"}
                                inputName={"projName"} placeHolder={"Name"} inputValue={project} setFunction={setProject}
                                inputId="name" ifRequired={"required"} />
                            {/* <IettaInputField inputCssClass={"signUpform-input-style"} inputType={"text"}
                                inputName={"type"} placeHolder={"Type"} />
                            <IettaInputField inputCssClass={"signUpform-input-style"} inputType={"text"}
                                inputName={"docType"} placeHolder={"DocType"} /> */}
                        </div>
                        <div className="wp-2-col">
                            <div className="tag-field">
                                <IettaInputField inputCssClass={"signUpform-input-style"} inputType={"text"}
                                    inputName={"classification"} placeHolder={"Tags"} inputValue={project} setFunction={setProject}
                                    inputId="tags" ifRequired={"required"} />
                                <IettaLabel labelName={"comma seperated i.e [name, place, thing]"} labelCssClass={"tag-label"} />
                            </div>
                            {/* <IettaInputField inputCssClass={"signUpform-input-style"} inputType={"text"}
                                inputName={"mlModel"} placeHolder={"ML Model"} />
                            <IettaInputField inputCssClass={"signUpform-input-style"} inputType={"text"}
                                inputName={"ann"} placeHolder={"Annotation Type"} /> */}
                        </div>
                        <div></div>
                    </div>
                    <div className="wp-bot-cp w3-animate-zoom">
                        <Link style={{ textDecoration: 'none' }} to="/dashboard/projects"><NavigateBeforeIcon style={{ fontSize: 50 }} /></Link>
                        <IettaButton buttonCssClass={"form-btn-style-create"} buttonText={"Create"} />
                    </div>
                </form>
            </div>
        </>
    )
};