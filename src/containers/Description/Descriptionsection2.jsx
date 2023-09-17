// import React, { useEffect } from 'react'
import React from 'react'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
import { ScrollTrigger } from 'gsap/all'
import "../../App.css"
gsap.registerPlugin(ScrollToPlugin,ScrollTrigger)

const Slidercoullissant=()=>{
    const SliderTop=(elem,delay,duration)=>{
        gsap.fromTo(
            elem,
            {
                opacity:0,
                y:-300,
                visibility:"hidden",
                color:"none"
            },
            {
                opacity:1,
                y:0,
                delay:0.3,
                duration:0.6,
                transition: 0.9,
                visibility:"visible",
                color:"black",

                
                scrollTrigger:{
                    trigger:elem,
                    start:"top center",
                    end:"bottom center"
                }
            }
        )
    }


    useEffect(()=>{
        SliderTop('#box5')
    },[])
    useEffect(()=>{
        SliderTop('#box6')
    },[])
    return(
        <section/*style={{background:`url(${image2})`}} className="h-60 bg-cover bg-center"*/ >
            {/* <img src={image2}/> */}
            <div id="box5"  className="section2" ></div>

            <div id="box6" className="text-red-800">
                <div  className='flex justify-center mx-10 my-8'>
                <div >
                    <h1 className='text-2xl font-bold'>Lorem ipsum dolor</h1>
                    <p className='text-sm mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui veritatis enim necessitatibus. Enim accusantium rerum aut, deleniti cumque eligendi recusandae culpa</p>
                </div>
                <div className='mx-16 '>
                    <h1 className='text-2xl font-bold'>Lorem ipsum dolor</h1>
                    <p className='text-sm mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui veritatis enim necessitatibus. Enim accusantium rerum aut, deleniti cumque eligendi recusandae culpa</p>

                </div>
                <div >
                    <h1 className='text-2xl font-bold'>Lorem ipsum dolor</h1> 
                    <p className='text-sm mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui veritatis enim necessitatibus. Enim accusantium rerum aut, deleniti cumque eligendi recusandae culpa</p>

                </div>
            </div>
            </div>
         </section>
    ) 

} 

export default Slidercoullissant