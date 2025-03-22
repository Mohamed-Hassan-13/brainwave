import { check } from "../assets";
import { pricing } from "../Constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item, index) => (
        <div
          key={index}
          id={item.id}
          className="bg-n-8 border border-n-6 h-full
           rounded-[2rem] w-[19rem] even:py-14 lg:w-auto max-lg:w-full odd:py-8 px-6 odd:my-4 
           [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="h4 mb-4">{item.title}</h4>
          <p className="text-n-1/50 body-2 mb-3 min-h-[4rem]">
            {item.description}
          </p>
          <div className="flex h-[5.5rem] items-center mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] font-bold leading-none">
                  {item.price}
                </div>
              </>
            )}
          </div>
          <Button
            className={"w-full mb-6"}
            href={item.price ? "/pricing" : "mailto:contact@MohamedHassan"}
            white={!!item.price}
          >
            {item.price ? "Get started" : "Contact us"}
          </Button>
          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex border-n-6 border-t items-start py-5"
              >
                <img src={check} alt="check" width={24} height={24} />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
