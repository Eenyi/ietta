import React from 'react'
import { useState,useEffect } from 'react';
import "./notifytoggle.css";
import IettaButton from "../iettaComponents/IettaButton"
import spin_img from '../../images/21.png';
import { proceedingStatus,
  proceedingbody,
  footerStatus,
  proceedingGreeting } from './String.js';
  
export default function NotifyToggle(props) {
  const [isDisabled, setIsDisabled] = useState(false);
  function handleDisabled() {
    setIsDisabled(true)
    props.setValue(false)
    props.setResponse(undefined);
  }
  const [notification, setNotification] = useState({
    Status: proceedingStatus,
    Body: proceedingbody,
    Greeting: proceedingGreeting
  });
  
  useEffect(() => {
     if (props.response === null){
      setNotification({
        Status: proceedingStatus,
        Body: proceedingbody,
        Greeting: proceedingGreeting
      })
     }
     else{
      setNotification({
        Status: props.response.status,
        Body: props.response.body,
        Greeting: props.response.greeting
      })
     }
  }, [props.response]);

  return (
    <div  className={`fade-in-out ${isDisabled ? 'hidden' : 'wp-otr-notify w3-animate-opacity'}`}>
      <div className="wp-inr-notify w3-animate-zoom">
        <div className="wp-notify-content">
          <div className="wp-otr-notify-msg">
            <div className="notify-head">{notification.Status}</div>
            <div className="notify-body">{notification.Body}<br/>{notification.Greeting}</div>
            <div className="notify-footer">{footerStatus}</div>
          </div>
          <div className="wp-otr-notify-spin">
            <img src={spin_img} alt="..." className='wp-inr-notify-spin w3-animate-fading' />
          </div>
        </div>
        <IettaButton buttonText="Close" buttonCssClass={"attribute-save-btn"} buttonOnClick={handleDisabled} />
      </div>  
    </div>
  )
}
