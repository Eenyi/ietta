import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./alert.css"
import { store } from "../../store";
import { showAlert } from "../../features/alert/alertSlice";

export default function Alert() {
    const alertTopic = useSelector(state => state?.alert?.alertTopic)
    const alertText = useSelector(state => state?.alert?.alertText)

    useEffect(() => {
        let interval = setInterval(() => {
            store.dispatch(showAlert({
                alertDisplay: false,
                alertTopic: '',
                alertText: ''
            }))
        }, 3000)
        return () => clearInterval(interval)
    })
    return <>
        <div className="wp-otr-alert w3-animate-right">
            <div className="wp-alert-topic">
                <span className="alert-topic">{alertTopic}</span>
            </div>
            <div className="wp-alert-text">
                <span className="alert-text">{alertText}</span>
            </div>
        </div>
    </>
};
