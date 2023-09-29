import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Img1 from "../data/ad1.png";
import Img2 from "../data/ad2.png";
import Img3 from "../data/ad3.png";
import Img4 from "../data/ad4.png";
import AdviceCard from "./AdviceCard";
const Advice = () => {
  return (
    <section>
      <Container>
        <SectionHeading
          heading={"Practice Advice"}
          subHeading={
            "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"
          }
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mt-14">
          <AdviceCard
            image={Img1}
            text={"A single source of truth"}
            subText={
              "Newton thought that light was made up of particles, but then it was discovered"
            }
          />
          <AdviceCard
            image={Img2}
            text={"Fastest way to organize"}
            subText={
              "“Quantum mechanics” is the description of the behavior of matter"
            }
          />
          <AdviceCard
            image={Img3}
            text={"Fastest way to take action"}
            subText={"They describe a universe consisting of bodies moving"}
          />
          <AdviceCard
            image={Img4}
            text={"Work better together"}
            subText={
              "They finally obtained a consistent description of the behavior "
            }
          />
        </div>
      </Container>
    </section>
  );
};

export default Advice;
