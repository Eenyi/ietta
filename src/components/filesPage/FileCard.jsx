import React from "react";
import "./FileCard.css";
import { Link } from 'react-router-dom';
import { changeFileName } from "../../features/project/projectSlice";
import { store } from "./../../store";
import { resetEditor } from "../../features/page/pageSlice";

export default function FileCard({ fileName }) {
    const setFile = () => {
        store.dispatch(resetEditor());
        store.dispatch(changeFileName({ fileName }));
    }
    return <>
        <div className="wp-otr-fileCard w3-animate-zoom">
            <Link className="wp-otr-fileCard w3-animate-zoom"
                style={{ textDecoration: 'none' }}
                to="/editor"
                onClick={setFile}
            >
                <img alt='logo' src='' className="file" />
                <abbr title={fileName.split(".")[0].replaceAll("_", " ")} className="file-name">{fileName.split(".")[0].replaceAll("_", " ")}</abbr>
            </Link>
        </div>
    </>
}