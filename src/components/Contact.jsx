import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Img1 from "../data/Phone.png";
import Img2 from "../data/Location.png";
import Img3 from "../data/map.png";
import ContactCard from "./ContactCard";
const Contact = () => {
  return (
    <section>
      <Container>
        <SectionHeading
          heading={"Get In Touch"}
          subHeading={
            "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mt-14">
          <ContactCard image={Img1} isBg={false} />
          <ContactCard image={Img3} isBg={true} />
          <ContactCard image={Img2} isBg={false} />
        </div>
      </Container>
    </section>
  );
};

export default Contact;
