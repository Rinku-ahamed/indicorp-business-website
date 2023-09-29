import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Img1 from "../data/clarity_users-line.png";
import Img2 from "../data/customer.png";
import Img3 from "../data/award.png";
import Img4 from "../data/carbon_tool-box.png";
import WhyChooseCard from "./WhyChooseCard";
const WhyChoose = () => {
  return (
    <section>
      <Container>
        <SectionHeading
          heading={"WHY CHOOSE US"}
          subHeading={
            "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "
          }
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          <WhyChooseCard image={Img1} text="3K" subText="CASES DONE" />
          <WhyChooseCard image={Img2} text="45" subText="HAPPY CUSTOMERS" />
          <WhyChooseCard image={Img3} text="12+" subText="AWARD WINNING" />
          <WhyChooseCard image={Img4} text="1.5K" subText="CASES DONE" />
        </div>
      </Container>
    </section>
  );
};

export default WhyChoose;
