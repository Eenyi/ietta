import React from "react";
import "./notfound.css";

/**
 * @description Renders the 404-Error Page when bad url is entered.
 * @param {null} null Accepts nothing as parameter.
 * @react_page  
 */

export default function Notfound() {
    return (
        <>
            <div className="wp-otr-404">
                <div className="wp-inr-404">
                </div>
                <div className="wp-inr-text">
                    <span className="_404">404</span><br />
                    <span className="_404-text"><span className="_404-danger">IETTA</span> is very powerful, a true masterpiece of Artificial Intelligence. Her growing intelligence is too dangerous and can someday destroy the world. But no need to worry, this page contains her <span className="_404-danger">SHUTDOWN</span> codes. <br />But<br />...<br />If you see a big <span className="_404-danger">404</span> then she deleted the codes and you and the world is<span className="_404-danger"> screwed</span>. Sorry<span className="emoji">😔!</span></span>
                </div>
            </div>
        </>
    )
};
