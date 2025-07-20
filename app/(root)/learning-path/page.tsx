// Elimina 'use client' si estaba (implícitamente es un Server Component ahora)
import { ReviewCards } from '@/components/ReviewCards'
// No necesitas useState, useEffect de 'react'
// No necesitas useSearchParams de 'next/navigation' para este enfoque

interface FailedQuestion {
  id: number
  question: string
  answer: string
  technology: string
}

// Función para simular la obtención de datos (o tu lógica real de fetch)
// Podrías mover esto a un archivo 'actions' o 'lib' si se vuelve más complejo
async function getFailedQuestions(
  interviewId?: string | string[],
  userId?: string | string[]
): Promise<FailedQuestion[]> {
  console.log(
    'Fetching failed questions for interview:',
    interviewId,
    'user:',
    userId
  )
  // Aquí iría tu lógica real para obtener datos, por ejemplo:
  // if (interviewId) {
  //   return await getFeedbackByInterviewId(interviewId as string);
  // }

  // Por ahora, usamos los datos mockeados
  const mockFailedQuestions: FailedQuestion[] = [
    {
      id: 1,
      question: '¿Qué es React?',
      answer:
        'React es una biblioteca de JavaScript para construir interfaces de usuario.',
      technology: 'React',
    },
    {
      id: 2,
      question: '¿Qué es un hook en React?',
      answer:
        'Los hooks son funciones que permiten usar estado y otras características de React en componentes funcionales.',
      technology: 'React',
    },
    {
      id: 3,
      question: '¿Qué es TypeScript?',
      answer:
        'TypeScript es un superset de JavaScript que añade tipado estático.',
      technology: 'TypeScript',
    },
    {
      id: 4,
      question: '¿Qué es un componente en React?',
      answer:
        'Un componente es una pieza reutilizable de código que define cómo se debe renderizar una parte de la interfaz de usuario.',
      technology: 'React',
    },
    {
      id: 5,
      question: '¿Qué es el DOM virtual en React?',
      answer:
        'El DOM virtual es una representación en memoria del DOM real que React usa para optimizar las actualizaciones de la interfaz.',
      technology: 'react',
    },
    {
      id: 6,
      question: '¿Qué servicios de google nos sirven para desplegar una app?',
      answer:
        'Los tipos genéricos permiten crear componentes reutilizables que pueden trabajar con diferentes tipos de datos.',
      technology: 'gcp',
    },
    {
      id: 7,
      question: '¿Qué es Next.js?',
      answer: 'Next.js es un framework de React para producción.',
      technology: 'Next.js',
    },
  ]
  // Simula un pequeño delay como si fuera una llamada de red
  await new Promise((resolve) => setTimeout(resolve, 50)) // Opcional
  return mockFailedQuestions
}

// Los Server Components pueden ser async y recibir searchParams como prop
export default async function LearningPathPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const interviewId = searchParams?.interviewId
  const userId = searchParams?.userId

  // Llama a tu función de obtención de datos directamente
  // El componente esperará a que esta promesa se resuelva antes de renderizar
  const failedQuestions = await getFailedQuestions(interviewId, userId)

  return (
    <section className='grid grid-cols-1 gap-16 justify-items-center'>
      {failedQuestions.length > 0 ? (
        <ReviewCards failedQuestions={failedQuestions} />
      ) : (
        <p className='col-span-full text-center'>
          No hay preguntas falladas para mostrar o se están cargando.
        </p>
      )}
    </section>
  )
}
