import Container from "./Container";
import Banner from "../data/background.png";
const HeroSection = () => {
  return (
    <section
      className="pt-[150px] h-[750px]"
      style={{
        backgroundImage: `url(${Banner})`,
        backgroundPosition: "0% 0%",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <h2 className="text-[#23283E] text-[40px] md:text-[60px] font-bold sm:leading-[70px] mb-6">
          EMPOWER <br /> YOUR BUSINESS
        </h2>
        <p className="text-[#737373] text-[21px] mb-6">
          We know how large objects will act, <br /> but things on a small
          scale.
        </p>
        <div className="flex gap-3 items-center">
          <button className="bg-[#008A8C] text-white py-3 px-6 rounded-[100px] font-semibold hover:bg-[#2290C7] duration-200 border">
            Get Quote Now
          </button>
          <button className=" text-[#2290C7] py-[10px] px-8 rounded-[100px] font-semibold hover:bg-[#2290C7] hover:text-white duration-200 border border-[#2290C7]">
            Learn More
          </button>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
