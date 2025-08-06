import React from 'react';
import './IettaNewButton.css';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

export default function IettaNewButton({ link, text }) {
    return <>
        <div className="wp-add-Btn w3-animate-zoom">
            <div className="wp-btn-symbol">
                <Link style={{ textDecoration: 'none' }} to={link}><AddIcon className='wp-add-icon' style={{ fontSize: 35 }} /></Link>
            </div>
            {/* <div className="wp-btn-label">
                {text}
            </div> */}
        </div>
    </>
}