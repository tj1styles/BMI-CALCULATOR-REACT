import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <>


            <div className="w-full h-[100vh] absolute z-20  justify-center flex flex-row flex-wrap items-center ">

                  <div class="loading w-[20vw] h-[20vh] gap-[0.7vw] ">
                       <span  className='w-[10%] md:w-[5%] h-full'></span>
                        <span className='w-[10%] md:w-[5%] h-full'></span>
                        <span className='w-[10%] md:w-[5%] h-full'></span>
                        <span className='w-[10%] md:w-[5%] h-full'></span>
                        <span className='w-[10%] md:w-[5%] h-full'></span>
                  </div>




            </div>
    
    
    
    </>
  )
}

export default Loader