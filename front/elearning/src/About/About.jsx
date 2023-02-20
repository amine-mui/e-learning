import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth';
import "./About.css";
import Nav from "../Nav.jsx"

const About = () => {
  const isconnected = useAuth((state) => state.connected)
  return (
    <div>
      <section>
      <ul className = 'nav-ul'>
       </ul>
       <div> <Nav/> </div>
     </section>
    <section className='head'>
    <div className='sub-main'>
      <h1 id='headline'>Keep Learning.</h1>
      <h3 className='subline'> We envision a world where anyone, anywhere has the power to transform their lives through learning.</h3>
      </div>
  </section>
    <section>
    <div className='footer-first'>
     <h1>"We believe learning is the source of human progress.
     It has the power to transform our world
     from illness to health, 
     from poverty to prosperity,
     from conflict to peace.
     It has the power to transform our lives
     for ourselves,
     for our families,
     for our communities.
     No matter who we are or where we are,
     learning empowers us to change and grow
     and redefine what is possible.
     That is why access to the best learning is a right, not a privilege. 
     And that is why  is here.
     We partner with the best institutions
     to bring the best learning
     to every corner of the world.
     So that anyone, anywhere has the power to 
     transform their lives through learning."
    </h1>
    </div>
    </section>
    <section className='nexttocnr'>
      <h1>What's BrainLab? </h1>
      <h3>E-learning has been accelerating in popularity over the past decade. 
        As technology continually develops and advances, learning methods have adapted to keep up with an increasingly digital
         world. BrainLab is the global online learning platform that offers anyone, anywhere access to online courses 
        from world-class teachers and companies.</h3>
    </section>
   <section id="container">
      <div id="card">
        <div id="image">
        </div>
        <h2>Python</h2>
        <p>Python Decorators and Writing for Real Python | Real Python Podcast #1</p>
      </div>
      <div id="card">
        <div id="image2">
        </div>
        <h2>AI</h2>
        <p>Introduction to Artificial Intelligence For Beginners</p>
      </div>
      <div id="card">
        <div id="image3">
        </div>
        <h2>Marketing</h2>
        <p>Best Digital Marketing Company In Kochi | #1 Agency</p>
      </div>
      <div id="card">
        <div id="image4">
        </div>
        <h2>Japanese</h2>
        <p>Learn Hiragana, Katakana and Kanji for Beginners</p>
      </div>
    </section>
  <section>
  <div id='footer-third'>
   <h3>Join our global community and start learning today!</h3>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <button id='thirdfooterbtn' href="#"><Link to="/signup"><h3 style = {{ textDecoration : "none", paddingTop: "0px", margin : "0px", color : "white" }} >Join now</h3></Link></button>
  </div>
  <div className='footer-last'>
  <p>©2023 BrainLab Inc. All rights reserved.</p>
    <p></p>
  </div>
  </section>
</div>
  )
}

export default About;