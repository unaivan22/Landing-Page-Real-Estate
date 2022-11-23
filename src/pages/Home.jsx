import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'


import Navbar from './misc/Navbar';

import Hero from './sectionHome/Hero';
import About from './sectionHome/About';
import WhyChoose from "./sectionHome/WhyChoose"


import AnimatedPage from "./AnimatedPage";



export default function Home() {
  return (
    <div>
        <AnimatedPage>
            <Navbar />
            <div>
               <section className="container mx-auto sm:px-24 md:px-12 xl:px-12 lg:px-12 mt-32" >
                <Hero />
               </section>

               <section className='container mx-auto sm:px-24 md:px-12 xl:px-12 lg:px-12 mt-32 my-48'>
                <About />
               </section>

               <section className='bg-blue-200'>
                <WhyChoose />
               </section>


            </div>
        </AnimatedPage>
        {/* <Footers /> */}
    </div>
  )
}