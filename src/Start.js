import React from 'react'
import "./Start.css"
export default function Start(props) {
  return (
    <div className='startBackground centerContent'>
      <div className="startBackground__button centerContent" onClick={props.onClick}>
        <p className="startBackground--text">Start</p>
      </div>
    </div>
  )
}
