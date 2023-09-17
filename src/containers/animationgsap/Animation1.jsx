import React from "react"
import image3 from "../../images/imgLogo/chef-hat.jpg"
import gsap from 'gsap'
import { ScrollToPlugin } from "gsap/all"
import { ScrollTrigger } from "gsap/all"
import { useEffect } from "react"

gsap.registerPlugin(ScrollToPlugin,ScrollTrigger)
const TitleAnimation=()=>{
    // const SlideIntop=(elem,delay,duration)=>{ 

    //     gsap.fromTo(
    //         elem,
    //         {
    //             opacity:0,
    //             y:-120,
    //         }, 
    //         {
    //             opacity:1, 
    //             y:0, 
    //             duration:0.6,
    //             delay:0.4, 
    //             scrollTrigger:{
    //                 trigger: elem,
    //                 start:"top center",
    //                 end:"bottom center"
    //             }  
    //         }
    //     )

    // } 

        const SlideIntop=(elem,delay,duration)=>{
                gsap.fromTo(
                     elem,
                {
                     opacity:0,
                     y:-200
                },
                {
                    opacity:1,
                    y:0,
                    delay:0.2,
                    duration:0.6,
                    // scrollTrigger:{
                    //     trigger:elem,
                    //     start:"top center",
                    //     end:"bottom center"
                    // }
                }
        )
}

    // useEffect(()=>{
    //     SlideIntop("#box1", 2,3,4)
    // },[])
    useEffect(()=>{
        SlideIntop("#box2", 2,3,4)
    },[])

    const SlideInleft=(elem,delay,duration)=>{
        gsap.fromTo(
             elem,
        {
             opacity:0,
             x:-200
        },
        {
            opacity:1,
            x:0,
            delay:0.4,
            duration:0.6,
            scrollTrigger:{
                trigger:elem,
                start:"top center",
                end:"bottom center"
            }
        }
)
}

useEffect(()=>{
    SlideInleft("#box3", 2,3,4)
},[])

    return(
        <div>
             <section className="text-white">
                <div >
                  <img src={image3} className='w-20' />
                  <h1 className="capitalize text-lg font-bold ">fast food genesis</h1>
                </div>
                <div className="my-9">
                  <span id="box2" className="text-6xl font-mono  text-neutral-100 bg-blue-500">Genesis Food</span>
                  <h2 id='box3' className="mt-9 text-xl font-bold text-neutral-100 bg-red-600 w-60">campiones del inovacion </h2>
                </div>
                <div >
                  <span className="bg-white text-black font-bold rounded-full p-2 capitalize">read more</span>
                  <p id="box1" className="w-[400px] mt-3 text-base text-neutral-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores veritatis nostrum esse adipisci iusto quam qui eaque. Nostrum vel nobis magni id qui saepe necessitatibus, nam voluptates autem eaque ea! </p>
                </div>
            </section>
        </div>
    )
} 

export default TitleAnimation;