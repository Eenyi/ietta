import React from 'react'
import "./tagbubble.css";

export default function TagBubble({ tag }) {
    return <div className='wp-bubble'>⭕ {tag.replaceAll("_", " ")}</div>
}