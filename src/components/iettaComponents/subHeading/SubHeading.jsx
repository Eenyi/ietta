import React from "react";
import "./subheading.css";

export default function SubHeading({
    text,
    underlineSize
}) {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        width: "60%"
    }
    } >
        <span className="ietta-subheading">
            {text}
        </span>
        {/* <hr
            className="ietta-subheading-hr"
            style={{ width: underlineSize }}
        /> */}
    </div>
};
