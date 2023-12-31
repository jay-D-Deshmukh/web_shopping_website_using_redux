import React from 'react'
import ProductData from './ProductData'


function Home() {
return (
        <div>
        <div className='text-center mt-24'>
        <h1 className=' text-3xl font-bold '>This is Home Page</h1>
        <h1 className='text-xl mt-1'>Products</h1>

        </div>
            
            <ProductData/>
        </div>
    )
}

export default Home
