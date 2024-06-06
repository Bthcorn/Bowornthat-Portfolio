import React from 'react'

export const AboutMe = () => {
  return (
    <section className='w-full h-dvh border rounded-t-3xl flex flex-col justify-start bg-primary'>
      <div className='h-fit flex flex-col justify-center items-center rounded-md p-4'>
        <p className='text-accent'>A little bit</p>
        <div className='text-primary-foreground font-extrabold text-4xl sm:text-5xl p-4'>About Me</div>
      </div>
      <article className='w-full h-fit flex flex-col text-pretty whitespace-normal items-center text-center p-8 text-primary-foreground text-lg md:text-2xl sm:text-2xl tracking-wide'>
        “Hello! I'm a first-year Software Engineering student at KMITL, 
        eager to advance my coding skills and stay updated with new technologies. 
        I'm looking for internships to apply my knowledge and gain practical experience. 
        My strengths include a strong passion for learning and consistent effort. 
        I'm excited to contribute to your team. Please contact me if my portfolio interests you.”
      </article>
    </section>
  )
}
