import React, { useRef } from 'react'
import "./Start.css"
export default function Start(props) {
  const ref1=useRef()
  const ref2=useRef()
  const ref3=useRef()
  const ref4=useRef()
  function stopAnimations(){
    ref1.current.setAttribute('id', "stopAnimation")
    ref2.current.setAttribute('id', "stopAnimation")
    ref3.current.setAttribute('id', "light")
    ref4.current.setAttribute('id', "stopAnimation")
  }
  function continueAnimations(){
    ref1.current.removeAttribute('id')
    ref2.current.removeAttribute('id')
    ref3.current.removeAttribute('id')
    ref4.current.removeAttribute('id')
  }
  return (
    <div className='startBackground centerContent'>
      <div className="button centerContent" onClick={props.onClick} ref={ref1} onMouseOver={stopAnimations} onMouseLeave={continueAnimations}>
        <p className="text" ref={ref2}>START</p>
      </div>
      <div className="bg_shadow" ref={ref3}></div>
      <div className="bg_light" ref={ref4}></div>
    </div>
  )
}
