import React from 'react'
import "./navbar.css"
// import BlurLinearIcon from '@mui/icons-material/BlurLinear';
// import { useState } from "react";
// import VillaIcon from '@mui/icons-material/Villa';
// import AccountTreeIcon from '@mui/icons-material/AccountTree';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';
import { removeToken } from '../../resources/authHelper';
import { store } from '../../store';
import { clearProjectDetails } from '../../features/project/projectSlice';
import { resetEditor } from '../../features/page/pageSlice';

export default function Navbar({ collapseLeftDiv, expandRightDiv }) {
    const logout = () => {
        store.dispatch(resetEditor())
        store.dispatch(clearProjectDetails())
        removeToken("ietta_access_token");
    }
    return (
        <>
            <div className="wp-otr-navbar">
                <div className="wp-navbar-logo">
                    <img alt='logo' src='' />
                </div>
                <div className='wp-inr-navbar'>
                    <div className="wp-navbar-control">
                        <div className="wp-control-content">
                            <Link style={{ textDecoration: 'none' }} to="/dashboard">
                                <span>Home</span>
                            </Link>
                        </div>
                        <div className="wp-control-content">
                            <Link style={{ textDecoration: 'none' }} to="/dashboard/projects">
                                <span>Projects</span>
                            </Link>
                        </div>
                        <div className="wp-control-content">
                            <Link style={{ textDecoration: 'none' }} to="/dashboard/docs">
                                <span>Docs</span>
                            </Link>
                        </div>
                        <div className="wp-control-content">
                            <Link style={{ textDecoration: 'none' }} to="/dashboard/setup">
                                <span>Setup</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='wp-inr-navbar'>
                    <div className="wp-navbar-logout">
                        <Link style={{ textDecoration: 'none' }} onClick={logout}>
                            <span>Logout</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
