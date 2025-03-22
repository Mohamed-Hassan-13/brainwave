import { check2, grid, loading1 } from "../assets";
import { roadmap } from "../Constants";
import Button from "./Button";
import { Gradient } from "./design/Roadmap";
import Heading from "./Heading";
import Section from "./Section";
import TagLine from "./TagLine";

const Roadmap = () => {
  return (
    <Section className={"overflow-hidden"} id={"roadmap"}>
      <div className="container md:pb-10">
        <Heading tag="Ready to get started" title="What we're working on" />
        <div className="grid gap-6 md:gap-4 md:grid-cols-2 md:pb-[7rem] relative">
          {roadmap.map((item, index) => {
            const status = item.status === "done" ? "Done" : "In Progress";

            return (
              <div
                key={item.id}
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                  item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
              >
                <div className="bg-n-8 p-8 rounded-[2.4375rem] overflow-hidden relative xl:p-15">
                  <div className="absolute left-0 max-w-full top-0">
                    <img
                      src={grid}
                      alt="grid"
                      className="w-full"
                      width={550}
                      height={550}
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex justify-between items-center max-w-[27rem] mb-8 md:mb-20">
                      <TagLine>{item.date}</TagLine>
                      <div className="flex bg-n-1 rounded text-n-8 items-center px-4 py-1">
                        <img
                          src={item.status === "done" ? check2 : loading1}
                          className="mr-2.5"
                          width={16}
                          height={16}
                          alt="status"
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>
                    <div className="-mx-15 -my-10 mb-10">
                      <img
                        src={item.imageUrl}
                        className="w-full"
                        width={630}
                        height={420}
                        alt={item.title}
                      />
                    </div>
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <Gradient />
          <div className="flex justify-center md:mt-15 mt-12 xl:mt-20">
            <Button href="/roadmap">Our roadmap</Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
