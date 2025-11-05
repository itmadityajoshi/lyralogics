import React from 'react'
import Cards from './Cards'

const Services = () => {
  return (
    <>
        <div className='container mx-auto'>
            <div className=''>
                <h1 className='text-2xl text-orange-400'>Future Ready Services</h1>
                <div className='flex justify-between'>
                    <h2 className='text-2xl'>Empowring enterprises with innovative digital solutins</h2>
                    <button>left</button> 
                    <button>Right</button> 
                </div>

                {/* cards  */}
                <div>
                    <Cards/>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Services