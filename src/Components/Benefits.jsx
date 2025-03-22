import { benefitCard1 } from "../assets";
import { benefits } from "../Constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id={"features"}>
      <div className="container relative z-2">
        <Heading
          className="lg:max-w-2xl md:max-w-md"
          title={"Chat Smarter, Not Harder With Brainwave"}
        />
        <div className="flex flex-wrap justify-center gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="bg-[length:100%_100%] bg-no-repeat p-0.5 block md:max-w-[24rem] relative"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="flex flex-col p-[2.4rem] min-h-[22rem] pointer-events-none relative z-2">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="text-n-3 body-2 mb-6">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img src={item.iconUrl} alt="icon" width={48} height={48} />
                  <p className="text-n-1 text-xm font-bold font-code ml-auto tracking-wider uppercase">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>
              {item.light && <GradientLight />}
              <div
                className="bg-n-8 absolute inset-0.5"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute hover:opacity-15 inset-0 opacity-0 transition-opacity">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
