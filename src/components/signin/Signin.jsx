import React, { useState } from 'react'
import "./signin.css"
import IettaInputField from '../iettaComponents/IettaInputField'
import IettaButton from '../iettaComponents/IettaButton'
import Fetch from "../../resources/fetch"
import createFormData from '../../resources/formData'
import apiRoutes from '../../resources/apiUrls'
import { failureGreeting, failureStatus } from '../notifyToggle/String';
import { storeToken } from '../../resources/authHelper'


/**
 * @description Renders the Log In component appearing at top right corner of Home Page.
 * @param {null} null Accepts nothing as parameter.
 * @react_component  
 */

export default function Signin({ setNotification, setResponse }) {
    const [userCreds, setUserCreds] = useState({ "email": "", "password": "" });
    function loginUser(e) {
        e.preventDefault();
        setResponse(null);
        setNotification(true);
        if (userCreds.email !== "" && userCreds.password !== "") {
            let form = createFormData(userCreds);
            Fetch(apiRoutes.LOGIN, "post", form).then(
                (response) => {
                    if (response["status"]) {
                        return storeToken("ietta_access_token", response["auth_token"]);;
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
    }
    return (
        <div className="wp-signin">
            <form className='wp-form-input w3-animate-top' action="" method="post" onSubmit={loginUser}>
                <div className='wp-otr-form'>
                    {/* <input className='form-input-style' type="text" name="Username" placeholder="User Name:" required /> */}
                    <IettaInputField
                        inputCssClass={"form-input-style"} inputType={"email"} inputName={"email"}
                        placeHolder={"Email:"} ifRequired={"required"} inputValue={userCreds} setFunction={setUserCreds}
                        inputId="email" />
                </div>
                <div className='wp-otr-form'>
                    {/* <input className='form-input-style' type="password" name="password" placeholder="Password:" required /> */}
                    <IettaInputField
                        inputCssClass={"form-input-style"} inputType={"password"} inputName={"password"}
                        placeHolder={"Password:"} ifRequired={"required"} inputValue={userCreds} setFunction={setUserCreds}
                        inputId="password" />
                </div>
                {/* <div type="button" className='form-btn-style'>Login<InputIcon /></div> */}
                <IettaButton buttonText={"Login"} buttonCssClass={"form-btn-style"} />
            </form>
        </div>
    )
}
