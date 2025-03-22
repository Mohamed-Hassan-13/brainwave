import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../Constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            AI Chat for Seamless collaboration
          </h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li key={item.id} className="mb-3 py-3">
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt={item.title} />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="text-n-4 body-2 mt-3">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Button>Try it now</Button>
        </div>
        <div className="lg:ml-auto mt-4 xl:w-[38rem]">
          <p className="text-n-4 body-2 lg:mb-32 lg:mx-auto lg:w-[22rem] mb-8 md:mb-16">
            {collabText}
          </p>
          <div className="flex border border-n-6 rounded-full w-[22rem] -translate-x-1/2 aspect-square left-1/2 md:scale-100 mt-4 relative scale:75">
            <div className="flex border border-n-6 m-auto rounded-full w-60 aspect-square">
              <div className="bg-conic-gradient m-auto p-[0.2rem] rounded-full w-[6rem] aspect-square">
                <div className="flex bg-n-8 h-full justify-center rounded-full w-full items-center">
                  <img
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>
            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom 
                    rotate-${index * 45}`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/50 rounded-xl 
                        -rotate-${index * 45}`}
                  >
                    <img
                      src={app.icon}
                      alt="icon"
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
