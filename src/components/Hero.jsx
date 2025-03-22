import { curve } from "../assets";
import heroImage from "../assets/hero/intro.png";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] bg-hero-gradient"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-10">
          Revolutionizing Patient Care with {` `}
            <span className="inline-block relative">
              InstaCare AI{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
          Explore Advanced AI-Powered Healthcare Solutions with InstaCare AI—featuring Smart Diagnostics, Virtual Consultations, Medical Chatbots, EHR Integration, Predictive Analytics, and More—all in one place.
          </p>
          <Button href="/group-chat" white className="animate-bounce">
          Join Community
          </Button>
        </div>
      
          <BackgroundCircles />
     

      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
