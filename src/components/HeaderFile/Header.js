import React,{useState} from "react";
import { BsBrightnessHigh } from "react-icons/bs";
import { BsBrightnessHighFill } from "react-icons/bs";
import './Header.css'

const Header=()=>{
  const [light, setLight] = useState(true)

  const brightness=()=>{
    setLight(!light)
  }

  return(
    <div className="HeaderMain">
      <div id="HeaderName">Sarthak</div>
      <div className="HeaderNavigationBar">
        <div>Home</div>
        <div>Projects</div>
        <div>Testimonials</div>
      </div>
      <div className="HeaderContactBar">
        <div className="HeaderIcon">
          {
            light ? 
              <BsBrightnessHigh onClick={brightness} /> 
            : 
              <BsBrightnessHighFill onClick={brightness} />
          }
        </div>
        <div className="HeaderContactText">Contact Me</div>
      </div>
    </div>
  )
}

export default Header;