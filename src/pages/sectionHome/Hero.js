import React from 'react'

export default function Hero() {
  return (
    <div>
        <div className='grid grid-cols-2 gap-x-6 mb-12'>
            <div className='pr-12'>
                <h1 className='text-6xl font-bold'>Discover a place you’ll love to live</h1>
                <p className='text-zinc-600 font-light'>How much will it cost the target audience is makes and famles aged zero and up, for i'll pay you in a week we don't need to pay upfront i hope you understand yet i'll know it when i see it there are more projects lined up charge extra the next time,</p>
                <div class="my-4">
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>
            </div>
            <idv className='flex space-x-4'>
                <img src='media/hero/Img.png' />
                <img src='media/hero/Img-1.png' />
                <img src='media/hero/Img-2.png' />
                <img src='media/hero/Img-3.png' />
            </idv>
        </div>

        <div className='grid grid-cols-4 gap-x-24'>
            <div className='flex flex-col items-center'>
                <img src='media/hero/Icon.png' />
                <h5 className='text-2xl font-bold'>8,714+</h5>
                <p className='uppercase text-sm font-base'>happy customer</p>
            </div>
            <div className='flex flex-col items-center'>
                <img src='media/hero/Icon-2.png' />
                <h5 className='text-2xl font-bold'>8,714+</h5>
                <p className='uppercase text-sm font-base'>Installed Units</p>
            </div>
            <div className='flex flex-col items-center'>
                <img src='media/hero/Icon-3.png' />
                <h5 className='text-2xl font-bold'>8,714+</h5>
                <p className='uppercase text-sm font-base'>Home Served</p>
            </div>
            <div className='flex flex-col items-center'>
                <img src='media/hero/Icon-4.png' />
                <h5 className='text-2xl font-bold'>8,714+</h5>
                <p className='uppercase text-sm font-base'>Professional</p>
            </div>
        </div>
    </div>
  )
}
