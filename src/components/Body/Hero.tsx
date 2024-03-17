import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full flex-center flex-col">
      <h2 className="head_text text-center">
        <span className="orange_gradient text-center">
          Shubham Printing Press
        </span>
      </h2>
      <p className="desc text-center">Best printing services in India.</p>
    </div>
  );
};

export default Hero;
