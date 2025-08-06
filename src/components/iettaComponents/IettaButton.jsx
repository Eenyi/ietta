import React from "react"

export default function IettaButton({ buttonCssClass, buttonOnClick, buttonText }) {
    return (
        <>
            <button type="submit" className={buttonCssClass} onClick={buttonOnClick} >{buttonText}</button>
        </>
    )
};
