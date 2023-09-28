import Container from "./Container";
import Marketing from "../data/carbon_tool-box.png";
import Marketing1 from "../data/carbon_notebook.png";
import Setting from "../data/icn settings .icn-lg.png";
const Stats = () => {
  return (
    <section className="-mt-[200px]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <div className="bg-white px-7 py-9 rounded-md shadow-lg">
            <img src={Marketing} alt="" />
            <h3 className="text-[27px] text-[#23283E] font-bold py-3">
              Digital Marketing
            </h3>
            <p className="text-[#737373] text-[18px]">
              We focus on ergonomics and <br /> meeting you where you work.{" "}
            </p>
          </div>
          <div className="bg-white px-7 py-9 rounded-md shadow-lg">
            <img src={Setting} alt="" />
            <h3 className="text-[27px] text-[#23283E] font-bold py-3">
              National top 50 firms
            </h3>
            <p className="text-[#737373] text-[18px]">
              We focus on ergonomics and <br /> meeting you where you work.{" "}
            </p>
          </div>
          <div className="text-white px-7 py-9 bg-[#537DC3] rounded-md shadow-lg">
            <img src={Marketing1} alt="" />
            <h3 className="text-[27px] text-white font-bold py-3">
              Digital Marketing
            </h3>
            <p className="text-white text-[18px]">
              We focus on ergonomics and <br /> meeting you where you work.{" "}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Stats;
