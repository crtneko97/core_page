"use client";
import React, { useEffect, useState } from "react";
import "./hero.scss";
import Link from "next/link";
import Navbar from "../navbar/Navbar";
import anime from "animejs/lib/anime.es.js";

const Hero = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = window.innerHeight;
      const newOpacity = 1 - Math.min(scrollPosition / maxScroll, 1);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const wrapText = (selector: string) => {
      const textWrapper = document.querySelector(selector);
      if (textWrapper) {
        textWrapper.innerHTML = textWrapper.textContent!.replace(
          /\S/g,
          "<span class='letter'>$&</span>"
        );
      } else {
        console.error(`No element found for selector: ${selector}`);
      }
    };

    wrapText(".ml4 .letters-1");
    wrapText(".ml4 .letters-2");

    anime
      .timeline({ loop: false })
      .add({
        targets: ".ml4 .letters-1 .letter",
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 1500,
        delay: (el, i) => 150 * (i + 1),
      })
      .add({
        targets: ".ml4 .letters-1",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      })
      .add({
        targets: ".ml4 .letters-2 .letter",
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 150 * (i + 1),
      });

    anime({
      targets: ".ml4",
      opacity: [0, 1],
      duration: 1000,
      easing: "linear",
    });
  }, []);

  return (
    <div className="hero-wrapper">
      <Navbar />
      <div className="hero-background" style={{ opacity }}></div>
      <div className="hero">
        <div className="hero-content">
          <h1 className="ml4">
            <span className="letters-1">Websites without the struggle.</span>
            <span className="letters-2">WebEase</span>
          </h1>
          <div className="hero-buttons">
            <Link href="/about">
              <button className="hero-button">Contact us</button>
            </Link>
            <Link href="/about">
              <button className="hero-button">Features</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
