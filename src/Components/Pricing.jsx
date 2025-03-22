import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import Section from "./Section";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className={"overflow-hidden"} id={"pricing"}>
      <div className="container relative z-2">
        <div className="justify-center hidden lg:flex mb-[6.5rem] relative">
          <img
            src={smallSphere}
            alt="smallSphere"
            className="relative z-1"
            width={255}
            height={255}
          />
          <div
            className="w-[60rem] -translate-x-1/2 -translate-y-1/2 absolute left-1/2 
          pointer-events-none top-1/2"
          >
            <img
              src={stars}
              alt="stars"
              className="w-full"
              width={950}
              height={400}
            />
          </div>
        </div>
        <Heading
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="/pricing"
            className="border-b text-xs font-bold font-code tracking-wider uppercase"
          >
            See the full details{" "}
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
