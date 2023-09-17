import React from "react"
import backgroundImage from "../../images/imgnourriture/ailes-poulet-au-four-sauce-teriyaki.jpg"
import Navbarsearch from "../Bardenavigation/Navbar"
// import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
// import Navbarsearch from "../Bardenavigation/Navbar"
import "../../App.css"
const Accueil=()=>{
    // const divStyle={
    //     backgroundImage:`url(${backgroundImage }) `,
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundPosition: 'center',
    // }

    return(
     <div
         //  style={divStyle} 
       className="w-90 h-18" style={{backgroundImage: `url(${backgroundImage}) `}} >
       <div >
           <Navbarsearch/>
        </div>
            <h1>Foud cooks </h1>
       </div>
    )
} 

export default Accueil;