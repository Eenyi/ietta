import React from "react";
import "./contextmenuitem.css";

export default function ContextMenuItem({ itemName, onclick }) {
    return <>
        <span className="wp-items" onClick={onclick}>{itemName}</span>
    </>
};