import EmployeeCard from '@/components/employeeCard/EmployeeCard';
import AltHero from '@/components/hero-alt/AltHero'
import ParagraphCard from '@/components/paragraph-card/ParagraphCard';
import React from 'react'

const About = () => {
  return (
    <>
    <AltHero imageKey={'teamwork'} title={'ABOUT US'} />
      <ParagraphCard paragraph={'<brödtext>'} width='66%' />
    <main>
      <div className='Employee-div'>
      <EmployeeCard 
      avatarKey={'avatar'} 
      fullName={'Simon kern'} 
      role={'CTO'} 
      bio={'gillar att spela wow och andra spel'} 
      phone={736506078} 
      email={'simon.f.kern@webeasedomain.com'} 
      linkedin={'https::/www.linkedin.com/markzuckerberg'} />
            <EmployeeCard 
      avatarKey={'avatar'} 
      fullName={'Markus Wranghult'} 
      role={'Lead design'} 
      bio={'gillar att spela wow och andra spel'} 
      phone={736506078} 
      email={'simon.f.kern@webeasedomain.com'} 
      linkedin={'https::/www.linkedin.com/markzuckerberg'} />
            <EmployeeCard 
      avatarKey={'avatar'} 
      fullName={'Armin efternamn'} 
      role={'CEO'} 
      bio={'gillar att spela wow och andra spel'} 
      phone={736506078} 
      email={'simon.f.kern@webeasedomain.com'} 
      linkedin={'https::/www.linkedin.com/markzuckerberg'} />
            <EmployeeCard 
      avatarKey={'avatar'} 
      fullName={'William Wibeck'} 
      role={'Software developer'} 
      bio={'gillar att spela wow och andra spel'} 
      phone={736506078} 
      email={'simon.f.kern@webeasedomain.com'} 
      linkedin={'https::/www.linkedin.com/markzuckerberg'} />
      </div>
    </main>
    </>
  )
}

export default About;