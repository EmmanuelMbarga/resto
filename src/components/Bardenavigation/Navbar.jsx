import React from "react"
import {Link} from "react-router-dom"
import Searchbar from "../../containers/BarreRecherche/search"
const Navbarsearch=()=>{
    return(
        <nav className="mx-8  bg-black text-white w-full ml-0 py-3 bg-fixed">
             <ul className="flex justify-end mr-4">
                <li className="lienstyle"><Link to="/">Accueil</Link></li>
                <li className="lienstyle"><Link to='serviceline'>service en ligne</Link></li>
                <li className="lienstyle"><Link to='/Contacts'>contacts</Link></li>
                <li className="lienstyle"><Link to='/à propos'>A propos</Link></li>
                <Searchbar/>
             </ul>
        </nav>
    )
} 

export default Navbarsearch