import React from "react"
export default function IettaInputField({
    inputName,
    inputCssClass,
    inputType,
    inputId,
    placeHolder,
    ifRequired,
    minimumLength,
    acceptsOnly,
    inputValue,
    setFunction,
    reference,
    onChange }) {


    function handleOnChange(e) {
        e.preventDefault();
        if (typeof setFunction === "function") {
            setFunction({ ...inputValue, [e.target.id]: e.target.value });
        }
        if(typeof(onChange) === "function"){
            onChange();
        }
    }

    return (
        <>
            {inputValue == null ?
                <input type={inputType} id={inputId} name={inputName} placeholder={placeHolder} minLength={minimumLength}
                    accept={acceptsOnly} className={inputCssClass} required={ifRequired}
                    onChange={handleOnChange} ref={reference}
                />
                :
                <input type={inputType} id={inputId} name={inputName} placeholder={placeHolder} minLength={minimumLength}
                    accept={acceptsOnly} className={inputCssClass} required={ifRequired} value={inputValue && inputValue[inputId]}
                    onChange={handleOnChange} ref={reference}
                />
            }
        </>
    );
};
IettaInputField.defaultProps = {
    minimumLength: null,
    ifRequired: null,
    acceptsOnly: null,
    inputValue: undefined
}
