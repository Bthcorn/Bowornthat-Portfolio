import React from 'react'
import { Separator } from '../ui/separator'

export const SKills = () => {
  return (
    <section className='w-full min-h-dvh flex flex-col'>
      <div className="h-fit flex flex-col justify-center items-center rounded-md p-6 gap-y-2">
        <p className="text-secondary-foreground">tech</p>
        <div className="text-primary-foreground bg-primary rounded-md font-semibold text-3xl sm:text-4xl md:text-5xl p-3 inline-flex">
          Skills
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 '>
        <div>Programming Languages</div>
        <div>Front End Web Development</div>
        <div>Back End Web Development</div>
        <div>DataBase</div>
        <div>Tools</div>
        <div>Others</div>
      </div>
    </section>
  )
}
