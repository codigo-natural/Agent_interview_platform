import { InterviewCard } from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { getCurrentUser } from '@/lib/actions/auth.action'
import {
  getInterviewsByUserId,
  getLatestInterviews,
} from '@/lib/actions/general.action'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const user = await getCurrentUser()

  const [userInterviews, latestInterviews] = await Promise.all([
    await getInterviewsByUserId(user?.id ?? ''),
    await getLatestInterviews({ userId: user?.id ?? '' }),
  ])

  const hasPastInterviews = userInterviews?.length && userInterviews?.length > 0
  const hasUpcomingInterviews =
    latestInterviews?.length && latestInterviews?.length > 0

  return (
    <>
      <section className='card-cta'>
        <div className='flex flex-col gap-6 max-6 max-w-lg'>
          <h2>Get Interview-Ready with IA-Powered Practice & Feedback</h2>
          <p className='text-lg'>
            Practice on real interview questions & get instant feedback
          </p>
          <Button asChild className='btn-primary max-sm:w-full'>
            <Link href='/interview'>Start an Interview</Link>
          </Button>
        </div>

        <Image
          src='/robot.png'
          alt='robo-dude'
          width={400}
          height={400}
          className='max-sm:hidden'
        />
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Your Interviews</h2>

        <div className='interviews-section'>
          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p className='text-lg'>
              You haven&apos;t taken any interviews yet.
            </p>
          )}
        </div>
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Take an Interview</h2>

        <div className='interviews-section'>
          {hasUpcomingInterviews ? (
            latestInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p className='text-lg'>There are no new interviews available.</p>
          )}
        </div>
      </section>
    </>
  )
}
