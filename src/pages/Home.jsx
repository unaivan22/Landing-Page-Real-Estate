import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'


import Hero from './sectionHome/Hero';


import AnimatedPage from "./AnimatedPage";



export default function Home() {
  return (
    <div>
        <AnimatedPage>
            <div className="container mx-auto sm:px-24 md:px-12 xl:px-12 lg:px-12">
               <section >
                <Hero />
               </section>
            </div>
        </AnimatedPage>
        {/* <Footers /> */}
    </div>
  )
}