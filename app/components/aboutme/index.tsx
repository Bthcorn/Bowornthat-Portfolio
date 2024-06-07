import React from 'react'

export const AboutMe = () => {
  return (
    <section className='w-full h-dvh rounded-t-3xl flex flex-col justify-start bg-secondary '>
      <div className='h-fit flex flex-col justify-center items-center rounded-md p-4 gap-y-2'>
        <p className='text-secondary-foreground'>A little bit</p>
        <div className='text-primary-foreground bg-primary rounded-xl font-extrabold text-3xl sm:text-4xl md:text-5xl p-4 inline-flex'>About Me</div>
      </div>
      <article className='w-full h-fit flex flex-col text-pretty whitespace-normal items-center text-center p-8 sm:p-12 md:p-20 text-seconday-foreground text-lg md:text-2xl sm:text-xl tracking-wide'>
        “Hello! I'm a first-year Software Engineering student at KMITL, 
        eager to advance my coding skills and stay updated with new technologies. 
        I'm looking for internships to apply my knowledge and gain practical experience. 
        My strengths include a strong passion for learning and consistent effort. 
        I'm excited to contribute to your team. Please contact me if my portfolio interests you.”
      </article>
    </section>
  )
}
