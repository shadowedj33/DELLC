/* eslint-disable react/no-unknown-property */
import { curve, heroBackground } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles } from "./design/Hero";
import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./canvas/Model";
import StarsCanvas from "./canvas/Stars";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section className="w-full nav-height" customPaddings id="hero">
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[15.25rem]">
          <h1 className="h1 mb-6 text-n-2">
            Scale Your Business with AI & Digital Marketing from {` `}
            <span className="inline-block relative font-bruno font-extrabold text-n-7">
              DIGITAL ENDEAVORS{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-1"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-5">
            Upgrade your online presence with our skilled professionals. We help
            brands grow with AI-powered marketing, high-converting ads, custome
            web development, and seamless system integrations.
          </p>
          <Button href="#contact" white>
            Request a Consult
          </Button>
          <div className="flex h-10 items-center justify-center">
            <div className="w-[150%] h-[170%] absolute">
              <StarsCanvas />
              <Canvas className="xl:w-[175%] xl:-top-[-26%] lg:-top-[-25%] md:-top-[-30%] sm:-top-[-25%] -top-[-25%]">
                <Model />
              </Canvas>
            </div>
          </div>
        </div>
        <div className="h-5/6 absolute left-1/2 w-[250%] -translate-x-1/2 md:-top-[90%] md:w-[170%] lg:-top-[125%] xl:-top-[150%] xl:w-[150%] -top-[10%] sm:-top-[145%]">
          <img
            src={heroBackground}
            className="w-full"
            width={1440}
            height={1800}
            alt="hero"
          />
        </div>
        <BackgroundCircles className="h-5/6" />
      </div>
    </Section>
  );
};

export default Hero;
