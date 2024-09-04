import ContactCard from "@/components/contactCard/ContactCard";
import AltHero from "@/components/hero-alt/AltHero";
import LocationCard from "@/components/locationCard/LocationCard";
import React from "react";

const page = () => {
  return (
    <>
      <AltHero imageKey={"sthlm2"} title={"CONTACT"} />
      <main>
        <ContactCard />

        <LocationCard
          city={"STOCKHOLM"}
          street={"Bredgränd 7"}
          postalCode={"111 30"}
          googleMapSrc={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4070.8903118103963!2d18.071613977593696!3d59.325521474612465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77e2a08ae93f%3A0x5dfcc7d30e0a9dd6!2sBredgr%C3%A4nd%207%2C%20111%2030%20Stockholm!5e0!3m2!1ssv!2sse!4v1725465681080!5m2!1ssv!2sse`}
        />
      </main>
    </>
  );
};

export default page;
