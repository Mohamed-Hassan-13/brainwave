import { companyLogos } from "../Constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="text-center text-n-1/50 mb-6 tagline">
        Helping people create beautiful content at
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex flex-1 h-[8.5rem] justify-center items-center"
            key={index}
          >
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
