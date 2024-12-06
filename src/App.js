import React from "react";
import HeaderBlock from './components/HeaderFile/Header'
import HomeBlock from './components/HomeFile/Home'
import ProjectBlock from './pages/ProjectFile/Project'
import ContactMeBlock from './pages/ContactMeFile/ContactMe'
import './App.css'

const Main=()=>{
    return( 
        <div>
            <HeaderBlock/>
            <HomeBlock/>
            <ProjectBlock/>
            <ContactMeBlock/>
        </div>
    )
}

export default Main;