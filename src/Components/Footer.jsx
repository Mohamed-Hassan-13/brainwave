import React from "react";
import Section from "./Section";
import { socials } from "../Constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex justify-center gap-10 items-center max-sm:flex-col sm:justify-between">
        <p className="text-n-4 caption lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex flex-wrap gap-5">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex bg-n-7 h-10 justify-center rounded-full w-10 hover:bg-n-6 items-center transition-colors"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
