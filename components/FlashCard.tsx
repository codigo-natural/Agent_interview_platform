'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface FlashCardProps {
  question: string
  answer: string
  category: string
}

export default function FlashCard({
  question,
  answer,
  category,
}: FlashCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      className='relative w-full h-[300px] cursor-pointer perspective-1000'
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className='absolute w-full h-full transition-transform duration-500 preserve-3d'
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front of card */}
        {/* <div className='absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg p-6'></div> */}

        <div className='absolute h-80 w-64 overflow-hidden backface-hidden rounded-xl bg-[#3d3c3d] drop-shadow-xl group'>
          <div className='absolute inset-0.5 z-[1] flex flex-col items-start justify-evenly gap-6 rounded-lg bg-[#323132] p-4 text-white opacity-90'>
            <div className='h-full w-full overflow-hidden rounded-md bg-white flex flex-col justify-center items-center relative '>
              <h3 className='text-xl font-semibold mb-4 text-gray-800'>
                {question}
              </h3>
              <p className='text-gray-500'>Click para ver la respuesta</p>
            </div>
            <div className='flex justify-between w-full items-center'>
              <span className='inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4'>
                {category}
              </span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='w-8 h-8 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 duration-300 transition-all'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                <path d='M5 12l14 0'></path>
                <path d='M13 18l6 -6'></path>
                <path d='M13 6l6 6'></path>
              </svg>
            </div>
          </div>
          <div className='absolute transition-all duration-500 top-1/2 -left-1/2 group-hover:top-12 group-hover:-left-1/4 h-48 w-56 -z-10 bg-amber-800 blur-[50px]'></div>
        </div>

        {/* Back of card */}
        <div className='relative h-80 w-64 backface-hidden rounded-xl bg-[#3d3c3d] drop-shadow-xl group rotate-y-180'>
          <div className='absolute inset-0.5 z-[1] flex flex-col items-start justify-evenly gap-6 rounded-lg bg-[#323132] p-4 text-white opacity-90'>
            <div className='h-full w-full overflow-hidden rounded-md bg-white flex flex-col justify-center items-center relative '>
              <h3 className='text-xl font-semibold mb-4 text-gray-800'>
                {answer}
              </h3>
              <p className='text-gray-500'>Click para volver a la pregunta</p>
            </div>
            <div className='flex justify-between w-full items-center'>
              <span className='inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4'>
                Respuesta
              </span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='w-8 h-8 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 duration-300 transition-all'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                <path d='M5 12l14 0'></path>
                <path d='M13 18l6 -6'></path>
                <path d='M13 6l6 6'></path>
              </svg>
            </div>
          </div>
          <div className='absolute transition-all duration-500 top-1/2 -left-1/2 group-hover:top-12 group-hover:-left-1/4 h-48 w-56 -z-10 bg-amber-800 blur-[50px]'></div>
        </div>
      </motion.div>
    </motion.div>
  )
}
