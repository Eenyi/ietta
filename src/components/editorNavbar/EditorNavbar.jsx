import React from 'react'
import { Link } from 'react-router-dom';
import "./editornavbar.css"
import ReplyIcon from '@mui/icons-material/Reply';

export default function EditorNavbar() {
    return (
        <>
            {/* <div className="wp-upr-editorNav">
                <span>I</span>
                <span>E</span>
                <span>T</span>
                <span>T</span>
                <span>A</span>
            </div> */}
            {/* <hr className='wp-hr-nav' /> */}
            <div className="wp-editorNav">
                <Link style={{ textDecoration: 'none' }} to='/dashboard/files'>
                    <ReplyIcon className='replyIcon' style={{ fontSize: 30 }} />
                </Link>
            </div>
            {/* <hr className='wp-hr-nav' /> */}

        </>
    )

};
