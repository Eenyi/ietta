import "./uploadfile.css";
import IettaInputField from "../iettaComponents/IettaInputField";
import IettaLabel from "../iettaComponents/IettaLabel";
import IettaButton from "../iettaComponents/IettaButton";
import { Link } from "react-router-dom";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useSelector } from "react-redux";
import { useRef, useState } from "react";
import createFormData from "../../resources/formData";
import Fetch from "../../resources/fetch";
import apiRoutes from "../../resources/apiUrls";
import { useNavigate } from "react-router-dom";
import { proceedingGreeting, proceedingbody, proceedingStatus, failureGreeting, failureStatus } from "../notifyToggle/String";
import { addFile } from "../../features/project/projectSlice";
import { store } from "./../../store";


export default function UploadFile({ setNotification, setResponse }) {
    const project = useSelector((state) => state.project);
    const history = useNavigate();
    const [file, setFile] = useState({
        projectName: project.projectName,
        fileName: ""
    });
    var fileToUpload = useRef(null)
    function uploadFile(e) {
        e.preventDefault();
        setNotification(null);
        setNotification(true);
        setResponse({
            status: proceedingStatus,
            body: proceedingbody,
            greeting: proceedingGreeting
        })
        let form = createFormData(file)
        form.append("fileToUpload", fileToUpload.current.files[0])
        Fetch(apiRoutes.FILE, "post", form).then(
            (response) => {
                if (response["status"]) {
                    setNotification(false);
                    store.dispatch(addFile({ "uploadedFile": response?.uploadedFile }))
                    return history('/dashboard/files');
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
        <div className="wp-otr-uf w3-animate-right">
            <div className="wp-top-file">
                <span className="file-header">Upload File</span>
            </div>
            <form className="wp-inr-form" action="" method="post" onSubmit={uploadFile}>
                <div className="wp-uf-fields">
                    <div className="wp-uf-label">
                        <IettaInputField inputCssClass={"signUpform-input-style"} inputType={"text"}
                            inputName={"fileName"} inputValue={file} setFunction={setFile}
                            inputId="fileName" placeHolder={"File Name"} ifRequired={"required"} />
                    </div>
                    <div className="wp-uf-upload">
                        <IettaInputField inputCssClass={"file-upload-input"} inputType={"file"}
                            inputName={"uploadedFile"} acceptsOnly={"text/plain, application/pdf"}
                            ifRequired={"required"} reference={fileToUpload} />
                        <IettaLabel labelName={"upload file of extension: [.txt or .pdf]..."} labelCssClass={"tag-label"} />
                    </div>
                </div>
                <div className="wp-uf-button w3-animate-zoom">
                    <Link style={{ textDecoration: 'none' }} to="/dashboard/files"><NavigateBeforeIcon style={{ fontSize: 50 }} /></Link>
                    <IettaButton buttonText={"Upload"} buttonCssClass={"file-upload-btn w3-animate-zoom"} />
                </div>
            </form>
        </div>
    )
};
