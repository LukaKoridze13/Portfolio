import React, { useEffect, useState } from 'react'
import "./Story.css"
import Kid from '../Images/kid.gif'
import KidWalking from '../Images/kidWalking.gif'
import GuyWalking from '../Images/guyWalking.gif'
import School from '../Images/school.png'
import Sun from '../Images/sun.png'
import Moon from '../Images/Moon.png'
import Medal from '../Images/medal.png'
import { useNavigate } from 'react-router'
export default function Story() {
  let [date, setDate] = useState(2002)
  let [timer, setTimer] = useState()
  let [src, setSRC] = useState(Kid)
  let [width, setWidth] = useState('220px')
  let [height, setHeight] = useState('180px')
  let [visibleSchool, setVisibleSchool] = useState(false)
  let [visibleMedal, setVisibleMedal] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    if (date < new Date().getFullYear()) {
      timer = setInterval(() => {
        if (date === 2005) {
          setSRC(KidWalking)
          setHeight('400px')
          setWidth('420px')
        }
        if (date === 2012) {
          setSRC(GuyWalking)
          setHeight('500px')
          setWidth('380px')
        }
        if (date === 2008) {
          setVisibleSchool(true)
        }
        if (date === 2020) {
          setVisibleSchool(false)
        }
        setDate(date++)
      }, 1000)
    }
    return (() => {
      clearInterval(timer)
    })
  })

  // if(date===2022){
  //   navigate('/Portfolio/Page')
  // }
  return (
    <div className='container-fluid'>
      <h1>Year: {date}</h1>
      <img className='kid' src={src} alt="Kid Crawing" style={{ width: width, height: height }} />
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
      {visibleSchool && <h2>Prive School (Golden Medal, Highest Grades)</h2>}
      {visibleSchool && <img src={Medal} alt="medal" className='medal' />}
      {visibleSchool && <img src={School} alt="School" className='school' />}
      <ul className='stroylist'>
        <li>Participation in the "STUDIENBRÜCKE" project <a href="https://www.goethe.de/en/spr/eng/stb.html">About project</a></li>
        <li>In </li>
      </ul>
    </div>
  )
}
