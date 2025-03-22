import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BottomLine, Gradient, BackgroundCircles } from "./design/Hero";
import { heroIcons } from "../Constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className={"pt-[12rem] -mt-[5.25rem]"}
      crosses
      crossesOffset={"lg:translate-y-[5.25rem]"}
      customPaddings
      id={"hero"}
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="text-center lg:mb[6.25rem] max-w-[62rem] mb-[3.875rem] md:mb-20 mx-auto relative z-1">
          <h1 className="h1 mb-6">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with {` `}
            <span className="inline-block relative">
              Brainwave{" "}
              <img
                src={curve}
                className="w-full absolute left-0 top-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="text-n-2 body-1 lg:mb-8 max-w-3xl mb-6 mx-auto">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <Button white href={"/pricing"}>
            Get started
          </Button>
        </div>
        <div className="max-w-[23rem] md:max-w-5xl mx-auto relative xl:mb-24">
          <div className="bg-conic-gradient p-0.5 rounded-2xl relative z-1">
            <div className="bg-n-8 rounded-[1rem] relative">
              <div className="bg-n-10 h-[1.4rem] rounded-t-[0.9rem]" />
              <div className="rounded-b-[0.9rem] aspect-[33/40] lg:aspect-[1024/490] md:aspect-[688/490] overflow-hidden">
                <img
                  src={robot}
                  className="w-full lg:-translate-y-[23%] md:-translate-y-[10%] md:scale-[1] scale-[1.7] translate-y-[8%]"
                  alt="robot"
                  width={1024}
                  height={490}
                />

                <Generating
                  className={
                    "absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2"
                  }
                />
                <ScrollParallax isAbsolutelyPositioned>
                  <ul
                    className="hidden absolute -left-[5.5rem] bottom-[7.5rem]
                   px-1 py-1 bg-n-9/40 backdrop-blur
                   border border-n-1/10 rounded-2xl xl:flex "
                  >
                    {heroIcons.map((icon, i) => (
                      <li key={i} className="p-5">
                        <img src={icon} alt="icon" width={24} height={25} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className={
                      "hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    }
                    title={"Code generation"}
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div
            className="absolute -top-[54%] left-1/2 w-[234%]
           -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]"
          >
            <img
              src={heroBackground}
              alt="hero"
              className="w-full"
              width={1440}
              height={1800}
            />
          </div>
          <BackgroundCircles />
        </div>
        <CompanyLogos className="hidden lg:block mt-20 relative z-10" />
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
