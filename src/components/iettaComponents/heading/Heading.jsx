import React from "react";
import "./heading.css";

export default function Heading({
    text,
    underlineSize
}) {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        width: "50%"
    }}>
        <span className="ietta-heading">
            {text}
        </span>
        <hr
            className="ietta-heading-hr"
            style={{ width: underlineSize }}
        />
    </div>
};
