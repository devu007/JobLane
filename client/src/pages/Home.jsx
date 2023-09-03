import React from 'react'
import { Link } from 'react-router-dom'
import { MetaData } from '../components/MetaData'
import { toast } from 'react-toastify'
import { useState } from 'react';


export const Home = () => {

    return (


        <>
            <MetaData title="JobLane" />
            <div className='min-h-screen md:px-20 px-3  pt-14 flex   text-white bg-gray-950'>
                <div className='  w-full  flex  pt-28 flex-col justify-start  items-center gap-4'>

                    <div className='flex md:flex-row flex-col items-center justify-center md:gap-10 gap-1'>
                        <div className='md:text-8xl text-6xl titleT'>JOBLANE</div>
                        <div className=' flex justify-center items-center pt-1'>
                            <Link to="/jobs" className='font-semibold md:text-2xl text-lg blueCol  md:py-3 py-2 px-6 md:px-10 '>Browse Jobs</Link>
                        </div>
                    </div>
                    <div>
                        <p className='md:text-xl text-sm'>Your <span className='text-yellow-500'>gateway</span> to job opportunities.</p>
                    </div>


                  <div className='pt-16 pb-8'>
                       
                  </div>

                    

                </div>

            </div>


        </>
    )
}