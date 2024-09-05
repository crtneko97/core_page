import EmployeeCard from "@/components/employeeCard/EmployeeCard";
import AltHero from "@/components/hero-alt/AltHero";
import ParagraphCard from "@/components/paragraph-card/ParagraphCard";
import React from "react";

const About = () => {
  return (
    <>
 
      <AltHero imageKey={"teamwork"} title={"ABOUT US"} />
      <ParagraphCard paragraph={"Vårt team!"} width="66%" />
      <main>
        <div className="Employee-div">
          <EmployeeCard
            avatarKey={"avatar"}
            fullName={"Simon kern"}
            role={"CTO"}
            bio={"gillar att spela wow och andra spel"}
            phone={736506078}
            email={"simon.f.kern@webease.se"}
            linkedin={"https::/www.linkedin.com/markzuckerberg"}
          />
          <EmployeeCard
            avatarKey={"avatar"}
            fullName={"Marcus Wranghult"}
            role={"UX Designer"}
            bio={"Ansvarig för design"}
            phone={736506078}
            email={"Marcus.wranghult@webease.se"}
            linkedin={"https::/www.linkedin.com/markzuckerberg"}
          />
          <EmployeeCard
            avatarKey={"avatar"}
            fullName={"Armin Rezaeian"}
            role={"CEO"}
            bio={"Sköter projektledning"}
            phone={736506078}
            email={"Armin.rezaeian@webease.se"}
            linkedin={"https::/www.linkedin.com/markzuckerberg"}
          />
          <EmployeeCard
            avatarKey={"avatar"}
            fullName={"William Wibeck"}
            role={"Software developer"}
            bio={"gillar att spela wow och andra spel"}
            phone={736506078}
            email={"William.wibeck@webease.se"}
            linkedin={"https://se.linkedin.com/in/william-wibeck-b530a8219?"}
          />
        </div>
      </main>


    </>
  );
};

export default About;
