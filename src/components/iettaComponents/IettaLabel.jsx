import React from "react"

export default function IettaLabel({ labelName, labelCssClass }) {
    return (
        <>
            <label className={labelCssClass} >{labelName}</label>
        </>
    );
};
