import React from 'react'
import aboutimage from '../images/about.png'
function About() {
  return (
   <div id="about">
    <div className="about-image">
      <img src={aboutimage} alt="" />
    </div>
    <div className="about-text">
      <h1>LEARN MORE ABOUT US</h1>
      <p>Experience the Benefits of Advanced Technology and Expert Care odit ad hic exercitationem sit, sint error dolore maiores molestias quidem sapiente blanditiis natus obcaecati corporis voluptas eos.</p>
      <button><a target="_blank" rel="noreferrer"
      href="https://www.fixhealth.com/home">LEARN MORE</a></button>
    </div>
   </div>
  )
}

export default About