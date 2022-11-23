import React from 'react'

export default function Hero() {
  return (
    <div className='grid grid-cols-2 gap-x-6'>
        <div>
            <h1 className='text-5xl font-bold'>Discover a place you’ll love to live</h1>
            <p>How much will it cost the target audience is makes and famles aged zero and up, for i'll pay you in a week we don't need to pay upfront i hope you understand yet i'll know it when i see it there are more projects lined up charge extra the next time,</p>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Username
                </label>
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
  )
}
