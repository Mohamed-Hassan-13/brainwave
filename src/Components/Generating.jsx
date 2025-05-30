import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="h-5 w-5 mr-4" src={loading} alt="loading" />
      AI is generating
    </div>
  );
};

export default Generating;
