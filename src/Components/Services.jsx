import { check, service1, service2, service3 } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../Constants";
import Generating from "./Generating";
import Heading from "./Heading";
import Section from "./Section";
import {
  PhotChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

const Services = () => {
  return (
    <Section id={"how-to-use"}>
      <div className="container">
        <Heading
          title="Generative AI made for creators."
          text="Brainwave unlocks the potential of AI-powered applications"
        />
        <div className="relative">
          <div
            className="flex border border-n-1/10 h-[39rem] p-8 rounded-3xl
           items-center lg:p-20 mb-5 overflow-hidden relative xl:h-[46rem] z-1"
          >
            <div className="h-full w-full absolute left-0 md:w-3/5 pointer-events-none top-0 xl:w-auto">
              <img
                src={service1}
                alt="service"
                className="h-full w-full md:object-right object-cover"
                width={800}
                height={730}
              />
            </div>
            <div className="max-w-[17rem] ml-auto relative z-1">
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="text-n-3 body-2 mb-[3rem]">
                Brainwave unlocks the potential of AI-powered applications
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item) => (
                  <li
                    key={item}
                    className="flex border-n-6 border-t gap-4 items-start py-4"
                  >
                    <img width={24} height={24} src={check} alt="check" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating className="border border-n-1/10 absolute bottom-4 left-4 lg-right-auto lg:-translate-x-1/2 lg:bottom-8 lg:left-1/2 right-4" />
          </div>
          <div className="grid gap-5 lg:grid-cols-2 relative z-1">
            <div className="border border-n-1/10 rounded-3xl min-h-[39rem] overflow-hidden relative">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  alt="service2"
                  width={630}
                  height={750}
                />
              </div>
              <div
                className="flex flex-col bg-gradient-to-b
               justify-end p-8 absolute from-n-8/0 inset-0 lg:p-15 to-n-8/90"
              >
                <h4 className="h4 mb-4">Photo editing</h4>
                <p className="text-n-3 body-2 mb-[3rem]">
                  Automatically enhance your photos using our AI app&apos;s
                  photo editing feature. Try it now!
                </p>
              </div>
              <PhotChatMessage />
            </div>
            <div className="bg-n-7 p-4 rounded-3xl lg:min-h-[46rem] overflow-hidden">
              <div className="px-4 py-12 xl:px-8">
                <h4 className="h4 mb-4">Video generation</h4>
                <p className="text-n-3 body-2 mb-[2rem]">
                  {" "}
                  The world&apos;s most powerful AI photo and video art
                  generation engine. What will you create?
                </p>
                <ul className="flex justify-between items-center">
                  {brainwaveServicesIcons.map((icon, i) => (
                    <li
                      key={icon}
                      className={`rounded-2xl flex items-center justify-center ${
                        i === 2
                          ? " w-[3rem] h-[3rem] p-0.25 bg-conic-gradient  md:w-[4.5rem] md:h-[4.5rem] md:p-0.5"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          i === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={icon} alt="icon" width={24} height={24} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-n-8 h-[20rem] rounded-xl md:h-[25rem] overflow-hidden relative">
                <img
                  src={service3}
                  alt="service3"
                  className="h-full w-full object-cover"
                  width={520}
                  height={400}
                />
                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
