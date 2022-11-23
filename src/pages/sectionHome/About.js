import React from 'react'

export default function About() {
  return (
    <div className="grid grid-cols-2 gap-x-12">
      <div className="col-span-1 flex flex-col">
        <p className='text-light text-blue-600'>About Us</p>
        <h1 className='font-bold text-4xl'>Value we give to you</h1>
        <div className="flex flex-wrap mt-auto pt-3 text-xs">
          <img src='media/about/about-1.png' />
        </div>
      </div>
      <div className="col-span-1 flex flex-col">
        <img src='media/about/about-2.png' />
        <div className="flex flex-wrap mt-auto pt-3 text-xs space-y-4">
          <p className='text-sm font-light'>archito Group se présente comme un outil pluridisciplinaire et complet regroupant diverses maitrises et compétences utiles à l’investissement immobilier. OWN Group se positionne toujours et exclusivement du côté des investisseurs. Uncommonly spacious and handsomely appointed.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Explore</button>
        </div>
      </div>
    </div>
  )
}
