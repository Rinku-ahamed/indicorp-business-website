import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Img from "../data/service.png";
import Icon1 from "../data/icon1.png";
import Icon2 from "../data/icon2.png";
const Services = () => {
  return (
    <section id="services">
      <Container>
        <SectionHeading
          heading={"We are providing best business service."}
          subHeading={
            "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "
          }
        />
        <div className="lg:flex gap-10 mt-14">
          <div className="lh:basis-7/12 border p-2 rounded-md">
            <img src={Img} alt="service" />
          </div>
          <div className="lg:basis-5/12 lg:ps-[56px]">
            <h3 className="text-[#23283E] text-4xl font-bold leading-[50px] mb-2">
              Most trusted in our field
            </h3>
            <p className="text-[#737373] text-[17px] pe-3">
              Most calendars are designed for teams. Slate is designed for
              freelancers who want a simple way to plan their schedule.
            </p>
            <div className="mt-14">
              <div className="flex gap-3">
                <div>
                  <img src={Icon2} alt="" />
                </div>
                <div>
                  <h3 className="text-[#23283E] font-bold text-xl -mt-[6px]">
                    the quick fox jumps over the lazy dog
                  </h3>
                  <p className="text-[#737373] mt-1">
                    Things on a very small scale ...
                  </p>
                </div>
              </div>
              <div className="flex gap-3 mt-8">
                <div>
                  <img src={Icon1} alt="" />
                </div>
                <div>
                  <h3 className="text-[#23283E] font-bold text-xl -mt-[6px]">
                    the quick fox jumps over the lazy dog
                  </h3>
                  <p className="text-[#737373] mt-1">
                    Things on a very small scale ...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
