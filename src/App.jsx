// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import {useTranslation} from "react-i18next";
import NameSection from "./Components/NameSection/NameSection.jsx";
import Lang from "./Components/LangBtn/LangBtn.jsx";
import LeftSide from "./Components/LeftSide/LeftSide.jsx";
import RightSide from "./Components/RightSide/RightSide.jsx";


function App() {
    return (
        <>
            <div className="resume-container">
                <div className="head-row">
                    <NameSection/>
                    <Lang/>
                </div>
            <div className="main">
                <div className="left">
                    <LeftSide/>

                </div>
                <div className="right">
                    <RightSide/>
                </div>
            </div>
            </div>
        </>
    )
}


export default App
