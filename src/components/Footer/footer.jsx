import React from 'react'

const Footercomponent=()=>{
    return(
        <footer className="bg-black py-4 text-white">
            <div className='flex mx-2'>
                <div className='mr-10 p-2 w-96'>
                    <h1 className='capitalize mb-6'>title fastfood</h1>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius animi fugit voluptate quisquam asperiores? Aliquam architecto sit nihil reprehenderit, iusto, modi vitae pariatur hic maxime deserunt porro labore repudiandae beatae. </p>
                </div>
                <div className='capitalize mx-4'>
                    <h1 className='mb-6'>abaout</h1>
                    <div className="text-sm">
                    <p>historiqure</p>
                    <p>type de cuisine</p>
                    <p>les fondateurs</p>
                    <p>les sponsorts</p>
                    </div>
                    
                </div>
                <div className='capitalize mx-4'>
                    <h1 className='mb-6'>services</h1>
                    <div className="text-sm">
                        <p>livraison rapide</p>
                        <p>calendriez alimentaire</p>
                        <p>services traiteur</p>
                        <p>location de cuisinier</p>
                    </div>
                </div>
                <div className="capitalize  mx-4  text-justify">
                    <h1 className='mb-6'>other</h1>
                    <div className="text-sm">
                    <p>connected</p>
                    <p>help</p>
                    <p>privacy</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-3 text-sm'>
                <p>Copyright 2023 by EmmanuelMbarga</p>
            </div>
        </footer>
    )
} 

export default Footercomponent