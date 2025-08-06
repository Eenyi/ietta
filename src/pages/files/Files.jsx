import React, { useEffect } from "react";
import "./files.css";
import light_gif from "./../../empty_page_gifs/b861534c-e753-40af-829e-0c3a63358d92.gif"
import dark_gif from "./../../empty_page_gifs/awake ✓.gif"
import IettaNewButton from "../../components/iettaComponents/IettaNewButton/IettaNewButton";
import FileCard from "../../components/filesPage/FileCard";
import { useSelector } from "react-redux";
import { store } from './../../store'
import { changeCurrentPage } from "../../features/page/pageSlice";

export default function Files() {
    const projectName = useSelector((state) => state.project.projectName);
    useEffect(() => {
        store.dispatch(changeCurrentPage(projectName))
    }, [])
    const projectFiles = useSelector((state) => state.project.projectFiles);
    const files = projectFiles.length > 0 ? projectFiles : null
    return (
        <>
            <div className="wp-wrap-files w3-animate-right">
                {files ? files.map((file) => <FileCard key={file} fileName={file} />)
                    : <><img src={light_gif} alt="" className="light-empty-img" /><img src={dark_gif} alt="" className="dark-empty-img" /></>}
            </div>
            <div className="wp-newfile"><IettaNewButton /></div>
            <div className="wp-newfile-btn"><IettaNewButton link="/dashboard/files/upload" /></div>
        </>
    )
};
