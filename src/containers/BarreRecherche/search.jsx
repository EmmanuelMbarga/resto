import React, { useState } from "react"

const Searchbar=()=>{
    const datas=["ailes de poulet au four sauce teriyaki","tranche de pizza au pepperoni","salade grecque"]

    const [valeur,setValeur]=useState("")
    const btnchangeHandler=(e)=>{
        setValeur(e.target.value)
    }
    return(
        <div className='relative'>
            <input type="text" value={valeur} onChange={btnchangeHandler} className="border-2 border-white rounded-full w-46 text-black px-4"/>
            <ul className="absolute bg-black text-center rounded-s-lg rounded-e-lg " >
                { 
                    valeur &&
                    datas
                    .filter((element)=>element.includes(valeur))
                    .map((element,index)=><li key={index} onClick={()=>setValeur(element)} className="py-2 hover:border-b-[1px] cursor-pointer hover:bg-slate-800  hover:text-neutral-50 capitalize" > <a href={element}>{element}</a></li>)
                }
            </ul>
        </div>
    )
} 
export default Searchbar;