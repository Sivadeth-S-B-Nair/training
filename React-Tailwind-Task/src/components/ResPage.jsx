import React from 'react'
import { AcademicCapIcon, PlayCircleIcon, CheckBadgeIcon } from '@heroicons/react/20/solid'

export default function ResPage() {
  return (
    <section className='px-4 py-12 bg-gray-100 lg:px-30 lg:py-25'>
        <div className='flex flex-col items-center font-sans gap-6 lg:flex-row lg:items-stretch lg:gap-20'>
            <div className='flex flex-col items-center lg:items-start lg:w-1/2'>
                <div className='inline-flex items-center gap-1 text-red-800 bg-red-100 rounded-4xl px-4 py-3 mb-5'>
                    <AcademicCapIcon className="h-4"/>
                    <p className='font-bold text-xs lg:text-sm'>Premier Academic Institution</p>
                </div>
                <h1 className='text-center font-bold text-3xl mb-5 lg:text-left lg:text-5xl'>Empowering Minds,<br/>Shaping Tomorrows<br/>Leaders</h1>
                <p className='text-justify text-gray-500 mb-6 lg:text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet esse quaerat fugiat nesciunt iste cupiditate ad facilis, assumenda aspernatur voluptas, modi voluptatibus!</p>
                <div className='flex flex-wrap bg-white rounded-xl px-14 py-4 mb-6 shadow-md lg:flex-nowrap lg:w-full lg:divide-x lg:divide-gray-300 lg:px-5'>
                    <div className='flex flex-col items-center w-1/2 lg:flex-1 lg:w-auto'>
                        <p className='font-bold text-3xl text-red-800'>96%</p>
                        <p className='text-gray-500 text-sm font-semibold'>EMPLOYEE RATE</p>
                    </div>
                    <div className='flex flex-col items-center w-1/2 lg:flex-1 lg:w-auto'>
                        <p className='font-bold text-3xl text-red-800'>12:1</p>
                        <p className='text-gray-500 text-sm font-semibold'>STUDENT RATIO</p>
                    </div>
                    <div className='flex flex-col items-center w-full mt-3 lg:flex-1 lg:w-auto lg:mt-0'>
                        <p className='font-bold text-3xl text-red-800'>50+</p>
                        <p className='text-gray-500 text-sm font-semibold'>PROGRAMS OFFERED </p>
                    </div>  
                </div>
                <div className='font-bold flex flex-col gap-4 w-full lg:flex-row lg:w-auto'>
                    <button className='bg-red-800 text-white py-3 rounded-xl shadow-sm lg:px-6 lg:py-4'>Begin Your Journey</button>
                    <button className='flex items-center justify-center gap-1 bg-white py-3 shadow-sm rounded-xl lg:px-6 lg:py-4'><PlayCircleIcon className='h-4 text-red-800'/>Virtual Campus Tour</button>
                </div>
            </div>

            <div className='px-5 relative lg:w-1/2 lg:px-0'>
                <img src="../src/assets/sample_building.avif" alt="Building" className='rounded-2xl w-full object-cover h-80 shadow-md lg:h-120'/>
                <div className='flex absolute items-center bg-white bottom-4 left-9 gap-2 px-4 py-4 rounded-xl border-l-4 border-red-800 shadow-sm lg:-left-7 lg:bottom-12'>
                        <CheckBadgeIcon className='text-red-800 h-9'/>
                        <div>
                            <p className='font-semibold text-sm'>Fully Accrediated</p>
                            <p className='text-gray-500 text-xs'>Nationally Recognized</p>
                        </div>

                </div>
            </div>
        </div>
    </section>
  )
}
