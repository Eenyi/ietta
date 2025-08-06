import React from 'react'
import "./dashboard.css"
import { Route, Routes } from 'react-router-dom';
import Navbar from "../../components/navbar/Navbar"
import Homepage from '../../components/homepage/Homepage'
import Notfound from '../notfound/Notfound';
// import Projectpage from '../../components/projectpage/Projectpage'
import Projects from '../projects/Projects';
import Createproject from '../../components/createProject/createproject';
import NotifyToggle from '../../components/notifyToggle/NotifyToggle';
import Titlebar from '../../components/titlebar/Titlebar';
import { useRef, useState } from "react";
import Files from "./../files/Files";
import UploadFile from '../../components/uploadFile/UploadFile';
import Alert from '../../components/alert/Alert';
import { useSelector } from 'react-redux';
import Docs from '../../components/docs/Docs';
import Setup from '../../components/setup/Setup';

/**
 * @description Renders the Dashboard of IETTA after Log In/Sign Up.
 * @param {null} null Accepts nothing as parameter.
 * @react_page  
 */


export default function Dashboard() {
  const thisCollapseLeftDiv = useRef(null);
  const thisExpandRightDiv = useRef(null);
  const alertDisplay = useSelector(state => state?.alert?.alertDisplay)
  const [visibility, setVisibility] = useState({
    addTag: false,
    titleMenu: false,
    deleteProject: false
  });
  const [notification, setNotification] = useState(false);
  const [response, setResponse] = useState(null);
  return (
    <>
      {alertDisplay && <Alert />}
      {notification && <NotifyToggle value={notification} setValue={setNotification} response={response} setResponse={setResponse} />}
      <div className="wp-otr-dashboard" >
        <div className="wp-inr-dashboard-c1 w3-animate-zoom" ref={thisCollapseLeftDiv}>
          <Navbar collapseLeftDiv={thisCollapseLeftDiv}
            expandRightDiv={thisExpandRightDiv} />
        </div>

        <div className="wp-inr-dashboard-c2 w3-animate-right" ref={thisExpandRightDiv}>
          <Titlebar Title={"Title"} visibility={visibility} setVisibility={setVisibility} />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/docs" element={<Docs />} />
            <Route exact path="/setup" element={<Setup />} />
            <Route exact path="/files" element={<Files />} />
            <Route exact path="/projects/create" element={<Createproject setNotification={setNotification} setResponse={setResponse} />} />
            <Route exact path="/files/upload" element={<UploadFile setNotification={setNotification} setResponse={setResponse} />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
      </div>
    </>
  )
}
