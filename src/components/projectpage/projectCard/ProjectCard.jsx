import React from 'react';
import "./ProjectCard.css"
import { Link } from 'react-router-dom';
import { store } from "./../../../store";
import { changeDetails } from '../../../features/project/projectSlice';
import folder from "../../../images/light-folder.png"

export default function ProjectCard({ projectDetails }) {
    let settingProject = () => {
        store.dispatch(changeDetails(projectDetails));
    }
    return <>
        {/* <Link className="wp-card w3-animate-zoom" style={{ textDecoration: 'none' }} to="/dashboard/files" onClick={settingProject}>
            <span>{projectDetails?.name}</span>
        </Link> */}
        <div className="wp-otr-projectCard w3-animate-zoom">
            <Link className="wp-otr-fileCard w3-animate-zoom"
                style={{ textDecoration: 'none' }}
                to="/dashboard/files"
                onClick={settingProject}
            >
                <img alt='logo' className='folder' />
                <abbr title={projectDetails?.name} className='project-name'>{projectDetails?.name}</abbr>
            </Link>
        </div>
    </>
}
