import React from 'react'
import { useState, useRef, useEffect } from 'react';
import "./titlebar.css"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import apiRoutes from '../../resources/apiUrls';
import TitleBarMenu from '../titleBarMenu/TitleBarMenu';
import AddTag from '../addTag/AddTag';
import DeleteProject from '../deleteProject/DeleteProject';
import { useSelector } from 'react-redux';

export default function Titlebar({
  visibility,
  setVisibility
}) {
  const title = useSelector(state => state.page.currentPage)
  const divRef = useRef(null);
  const handleAddTag = () => {
    setVisibility({ addTag: !visibility.addTag })
  };
  const handleDeleteProject = () => {
    setVisibility({ deleteProject: !visibility.deleteProject })
  };
  const [state, setState] = useState({
    i: 0,
    j: 0,
  });
  const displayDropDown = () => {
    if (title === "Home" || title === "Docs" || title === "Setup") {
      return false;
    }
    else return true;
  }
  useEffect(() => {
    const element = divRef.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      setState({
        i: rect.top,
        j: rect.left,
      });
    }
  }, []);

  return (
    <>
      {visibility.deleteProject ? <DeleteProject setVisibility={handleDeleteProject} /> : null}
      {visibility.addTag ? <AddTag setVisibility={handleAddTag} /> : null}
      {visibility.titleMenu ?
        <TitleBarMenu x={state.j} y={state.i}
          setVisibility={handleAddTag}
          setDeleteVisibility={handleDeleteProject}
          handleMenu={() => { setVisibility({ titleMenu: !visibility.titleMenu }) }}
        /> : ""}
      <div className="wp-otr-titlebar">
        {
          displayDropDown() ? <div className='wp-inr-titlebar-icon' onClick={() => { setVisibility({ titleMenu: !visibility.titleMenu }) }}>
            <MoreHorizIcon style={{ fontSize: 35 }} ref={divRef} />
          </div> : <div className='wp-inr-titlebar-icon'>
          </div>
        }
        <div className='wp-inr-titlebar-text'>
          <span>{title}</span>
        </div>
        <div className='title-img'>
          <img src={apiRoutes.IMG} alt="..." className='wp-inr-titlebar-img' />
        </div>
      </div>
    </>
  )
}
