import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import image5 from "../../images/imgnourriture/poulet.jpg"
// import Mcarrousel2 from '../../images/new-picture/vue-laterale-doner-poulet-grille-vert-laitue-tomate-frites-table.jpg'
// import Mcarrousel3 from '../../images/new-picture/vue-laterale-du-poulet-au-four-du-fromage-dans-bol-argile.jpg'
// import Mcarrousel4 from '../../images/new-picture/canard.JPG'
const Caroussels=()=>{

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    //   className="h-[211px] w-[400px]"
    
    return(
        <div className="mx-10 my-10 cursor-pointer"> 
            <Carousel responsive={responsive} className="py-8">
                <div className='mx-6 border rounded-s-lg rounded-e-lg hover:shadow-lg hover:shadow-gray-400'>
                    <img src={image5}/>
                    <div className="p-3">
                        <h1 className="font-bold">Lorem ipsum dolor</h1>
                        <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quod ullam cumque laudantium dolore velit corporis tenetur </p>
                        
                    </div>
                </div>
                <div className='mx-6 border rounded-s-lg rounded-e-lg hover:shadow-xl shadow-black'>
                    <img src={image5 } />
                    <div className="p-3">
                        <h1 className="font-bold">Lorem ipsum dolor</h1>
                        <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quod ullam cumque laudantium dolore velit corporis tenetur </p>
                    </div>
                </div>
                <div className='mx-6 border rounded-s-lg rounded-e-lg hover:shadow-xl shadow-black'>
                    <img src={image5 } />
                    <div className="p-3">
                        <h1 className="font-bold">Lorem ipsum dolor</h1>
                        <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quod ullam cumque laudantium dolore velit corporis tenetur </p>
                    </div>
                </div>
                <div className='mx-6 border rounded-s-lg rounded-e-lg hover:shadow-xl shadow-black'>
                    <img src={image5 }/>
                    <div className="p-3">
                        <h1 className="font-bold">Lorem ipsum dolor</h1>
                        <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quod ullam cumque laudantium dolore velit corporis tenetur </p>
                    </div>
                </div>
                
            </Carousel>;
            <div className="flex justify-center text-white">
                <button className="bg-black rounded-s-md rounded-e-md py-1 px-4">show more</button>
            </div>
        </div>
    )
} 

export default Caroussels