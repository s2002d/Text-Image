import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'


const Description = () => {
  return (
    <motion.div
    initial={{opacity:0, y:100}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:1}}
    viewport={{once:true}}

     className='flex flex-col items-center justiry-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
        <p className='text-gray-500 mb-8'>Turn your Imagination Into visuals</p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
            <img src={assets.sample_img_1} alt='' className='w-80 xl:w-96 rounded-lg'/>
            <div>
                <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-powered Text to Image Generator</h2>
                <p className='text-grey-600 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nam itaque, iusto temporibus magnam et repellendus commodi aliquid, voluptatum quos dolorem enim deleniti eos, pariatur provident optio sequi adipisci suscipit.</p>
                <p className='text-grey-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quaerat minus porro molestias voluptatem voluptas dignissimos, dolor, quas asperiores pariatur totam? Ipsam facilis culpa ut laudantium mollitia dolores accusantium rem.</p>
            </div>
        </div>
    </motion.div>
  )
}

export default Description