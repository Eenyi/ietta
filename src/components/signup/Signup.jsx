import React from 'react'
import "./signup.css"
import IettaInputField from '../iettaComponents/IettaInputField'
import IettaButton from '../iettaComponents/IettaButton'
import { useState, useRef } from "react";
import Fetch from '../../resources/fetch';
import createFormData from '../../resources/formData';
import apiRoutes from '../../resources/apiUrls';
import {
    successStatus,
    failureStatus,
    successbody,
    successGreeting,
    failureGreeting,
} from '../notifyToggle/String';

export default function Signup({ setValue, setResponse1 }) {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    });
    var image = useRef(null);
    function submitForm(e) {
        e.preventDefault();
        setResponse1(null);
        setValue(true);
        let form = createFormData(user);
        var profilePic = image.current.files[0];
        form.append("profileImage", profilePic);
        Fetch(apiRoutes.SIGNUP, "post", form).then(
            (response) => {
                return setResponse1({
                    status: response["status"] ? successStatus : failureStatus,
                    body: response["status"] ? successbody : response["error"],
                    greeting: response["status"] ? successGreeting : failureGreeting
                });
            }
        )
    }
    return (
        <>
            <div className="wp-signup">
                <form className='wp-signUpform-input w3-animate-top' action="" method="post" onSubmit={submitForm}>
                    <div className='wp-otr-form'>
                        <IettaInputField inputCssClass={"signUpform-input-style"} inputType={"text"} inputName={"Username"}
                            placeHolder={"User Name: "} ifRequired={"required"}
                            inputValue={user}
                            setFunction={setUser}
                            inputId="username"
                        />
                    </div>
                    <div className='wp-otr-form'>
                        <IettaInputField inputCssClass={"signUpform-input-style"} inputType={"email"} inputName={"email"}
                            placeHolder={"Email: "} ifRequired={"required"}
                            inputValue={user}
                            setFunction={setUser}
                            inputId="email" />
                    </div>
                    <div className='wp-otr-form'>
                        <IettaInputField inputCssClass={"signUpform-input-style"} inputType={"password"} inputName={"password"}
                            placeHolder={"Password: "} ifRequired={"required"} minimumLength={"8"}
                            inputValue={user}
                            setFunction={setUser}
                            inputId="password" />
                    </div>
                    <div className='wp-otr-form'>
                        <IettaInputField inputCssClass={"form-input-style-img"} inputType={"file"} inputName={"profilePic"}
                            acceptsOnly={"image/x-png,image/gif,image/jpeg"} ifRequired={"required"}
                            reference={image} />
                    </div>
                    <IettaButton buttonCssClass={"form-btn-style"} buttonText={"Signup"} />
                    <div className="wp-ex-form-lines">
                        <hr className='wp-hr' />
                        <span className='wp-hr-or'>OR</span>
                        <hr className='wp-hr' />
                    </div>
                    <IettaButton buttonCssClass={"form-btn-style-twitter"} buttonText={"Signup with Twitter"} />
                </form>
            </div>
        </>
    )
}
