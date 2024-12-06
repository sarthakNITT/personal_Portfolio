import React, { useEffect, useState } from "react";
import ProfileImage from '../../assets/MainImage.jpeg'
import TypewriterComponent from "typewriter-effect";
import './Home.css'

const Home=()=>{
  return(
    <div className="Home">
      <div className="HomeLeft">
        <div className="HomeLeftTextOne">Multiplatform full stack Developer</div>
        <div className="HomeLeftTextTwo">Hi, I'm&nbsp;<div id="HomeLeftName">
        <TypewriterComponent
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Sarthak")
                        // .pauseFor(1000)
                        // .deleteAll()
                        // .typeString("Welcomes You")
                        .start();
                }}
            />
        </div></div>
        <div className="HomeLeftSubText">Whether it's a sleek, responsive website or a powerful, feature-rich mobile app, I transform your ideas into reality with precision, clean code, and cutting-edge solutions. My goal is to deliver seamless digital experiences that are not only visually stunning but also highly functional, scalable, and tailored to your unique needs.</div>
        <div className="HomeLeftButtonBox">
          <div className="HomeLeftButtonOne">Hire Me</div>
          <div className="HomeLeftButtontwo">View Projects</div>
        </div>
      </div>
      <div className="HomeRight">
        <img src={ProfileImage} className="HomeRightProfileImage" alt="MY PICTURE" />
      </div>
    </div>
  )
}

export default Home;