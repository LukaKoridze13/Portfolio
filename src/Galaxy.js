import React from 'react'
import ReactEarth from 'react-earth';
import "./Galaxy.css"

function Galaxy() {
  return (
    <div className="galaxy centerContent" style={{width: '100%', height: '99.7vh', margin:'0 auto', maxWidth:'1920px', boxSizing: 'border-box',padding: '0px'}}>
      <div className="typing-demo1"> Planet: Earth </div>
      <div className="typing-demo2"> Location: Tbilisi, Georgia <i class="flag flag-georgia"></i></div>
      <div className="typing-demo3"> Date: 13 April, 2002</div>
      <div className="typing-demo4"> Event: Luka Koridze's birth</div>
      <div className="twinkling" style={{width: '100%', height: '99.7vh', margin:'0 auto', maxWidth:'1920px',boxSizing: 'border-box'}}></div>
      <div className="earth">
        <ReactEarth width="100%" height="100%" speed={0.5} />
      </div>
    </div>
  )
}
export default Galaxy;