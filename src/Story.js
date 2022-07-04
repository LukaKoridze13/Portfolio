import React, { useEffect, useState } from 'react'
import "./Story.css"
import Kid from './Images/kid.gif'
import Sun from './Images/sun.png'
import Moon from './Images/Moon.png'
import { useNavigate } from 'react-router'
export default function Story() {
  let [date, setDate] = useState(2002)
  let [timer, setTimer] = useState()
  const navigate = useNavigate()
  useEffect(() => {
    if (date < new Date().getFullYear()) {
      timer = setInterval(() => {
        setDate(date++)
      }, 200)
    }
    return (() => {
      clearInterval(timer)
    })
  })
  if(date==2022){
    navigate('/Portfolio/Page')
  }
  return (
    <div className='container-fluid'>
      <h1>Year: {date}</h1>
      <img className='kid' src={Kid} alt="Kid Crawing" />
      <div className="grass"></div>
      <div className="road">
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

      </div>
      <img src={Sun} alt="Sun" className='sun' />
      <img src={Moon} alt="Moon" className='moon' />
    </div>
  )
}
