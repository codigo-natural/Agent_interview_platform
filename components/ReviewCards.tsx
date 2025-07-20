import { getTechLogos } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

interface FailedQuestion {
  id: number
  question: string
  answer: string
  technology: string
}

interface ReviewCardsProps {
  failedQuestions: FailedQuestion[]
}

export const ReviewCards = async ({ failedQuestions }: ReviewCardsProps) => {
  if (!failedQuestions || failedQuestions.length === 0) {
    return (
      <section className='p-4'>
        <p className='text-gray-500 text-center'>
          No hay preguntas para revizar esta vez
        </p>
      </section>
    )
  }
  const technologiesToShow = failedQuestions.map((fq) => fq.technology)
  const techIcons = await getTechLogos(technologiesToShow)

  const getIconForTechnology = (technologyName: string): string => {
    const foundIcon = techIcons.find(
      (icon) => icon.tech.toLowerCase() === technologyName.toLowerCase()
    )
    return foundIcon ? foundIcon.url : '/tech.svg'
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      {failedQuestions.map((question) => (
        <div
          key={question.id}
          className='bg-sidebar-border rounded-xl border h-full'
        >
          <div className='flex flex-col h-full'>
            <div className='flex items-center justify-between p-4 gap-3 rounded-xl m-2'>
              <div className='relative w-10 h-10'>
                <Image
                  src={getIconForTechnology(question.technology)}
                  alt={`${question.technology} logo`}
                  fill
                  className='object-contain'
                />
              </div>
              <h3 className='text-lg font-semibold text-gray-800 dark:text-white'>
                {question.technology}
              </h3>
            </div>

            <div className='bg-[radial-gradient(ellipse_at_right_bottom,#107667ed_0%,#151419_47%,#151419_50%)] opacity-75 transition-opacity duration-250 ease-in hover:opacity-100 p-4 rounded-xl m-2 mt-auto'>
              <div className='space-y-4'>
                <div className='rounded-xl bg-[#155b512d] border px-4 py-2'>
                  <h4 className='text-sm font-medium text-gray-400 mb-2'>
                    Pregunta
                  </h4>
                  <p className='text-gray-200 dark:text-gray-300'>
                    {question.question}
                  </p>
                </div>

                <div>
                  <h4 className='text-sm font-medium text-gray-500 dark:text-gray-400 mb-2'>
                    Respuesta
                  </h4>
                  <p className='text-gray-700 dark:text-gray-300'>
                    {question.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
