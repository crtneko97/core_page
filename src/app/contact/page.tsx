import ContactCard from '@/components/contactCard/ContactCard'
import AltHero from '@/components/hero-alt/AltHero'
import LocationCard from '@/components/locationCard/LocationCard'
import React from 'react'

const page = () => {
  return (
    <>
    <AltHero imageKey={'sthlm2'} title={'CONTACT'} />
    <main>
      <ContactCard />

      <LocationCard 
        city={'STOCKHOLM'} 
        street={'Gyllenstiernsgatan 4'} 
        postalCode={'115 26'} 
        googleMapSrc={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19847.83821197003!2d18.06324002122627!3d59.332580508987516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d6d2f30a4fb%3A0x24003ed7b64b7de0!2sStockholm%2C%20Sweden!5e0!3m2!1sen!2s!4v1618569053848!5m2!1sen!2s'}
      />
    </main>
    </>
  )
}

export default page