import Container from "./Container";
import Marketing from "../data/carbon_tool-box.png";
import Marketing1 from "../data/carbon_notebook.png";
import Setting from "../data/icn settings .icn-lg.png";
import StartCard from "./StartCard";
const Stats = () => {
  return (
    <section className="-mt-[200px]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <StartCard
            image={Marketing}
            title={"Digital Marketing"}
            description={
              "We focus on ergonomics and meeting you where you work."
            }
          />
          <StartCard
            image={Setting}
            title={"National top 50 firms"}
            description={
              "We focus on ergonomics and meeting you where you work."
            }
          />
          <StartCard
            image={Marketing1}
            title={"Digital Marketing"}
            description={
              "We focus on ergonomics and meeting you where you work."
            }
            style={true}
          />
        </div>
      </Container>
    </section>
  );
};

export default Stats;
