import React, { useState } from "react";
import { useEffect } from "react";
import IettaNewButton from "../../components/iettaComponents/IettaNewButton/IettaNewButton";
import ProjectCard from "../../components/projectpage/projectCard/ProjectCard";
import apiRoutes from "../../resources/apiUrls";
import Fetch from "../../resources/fetch";
import "./projects.css";
import { store } from './../../store'
import { changeCurrentPage } from "../../features/page/pageSlice";
import { useSelector } from "react-redux";
import { setProjectList } from "../../features/project/projectSlice";
import emptyGifDark from "../../empty_page_gifs/ezgif-3-477b50ead5.gif"
import emptyGifLight from "../../empty_page_gifs/Bnha Zodiac Pro heroes_ Villains ver.gif"

export default function Projects() {

    const projectList = useSelector(state => state?.project?.projectList);
    const projects = projectList.length > 0 ? projectList : null;
    useEffect(() => {
        store.dispatch(changeCurrentPage('Projects'))
        Fetch(apiRoutes.PROJECT, "get").then(
            response => store.dispatch(setProjectList(response))
        )
    }, [])
    return (
        <>
            <div className="wp-wrap-projects w3-animate-right">
                {projects ?
                    projects.map((project) => <ProjectCard key={project?.name} projectDetails={project} />)
                    : <>
                        <img src={emptyGifLight}
                            alt=""
                            className="project-gif-light" />
                        <img src={emptyGifDark}
                            alt=""
                            className="project-gif-dark" />
                    </>}
            </div>
            <div className="wp-newfile"><IettaNewButton /></div>
            <div className="wp-newfile-btn"><IettaNewButton link="/dashboard/projects/create" /></div>
        </>
    )
};