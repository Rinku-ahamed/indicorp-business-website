/* eslint-disable react/prop-types */
const StartCard = ({ image, title, description, style }) => {
  if (style) {
    return (
      <div className="text-white px-7 py-9 bg-[#537DC3] rounded-md shadow-lg">
        <img src={image} alt="" />
        <h3 className="text-[27px] text-white font-bold py-3">
          Digital Marketing
        </h3>
        <p className="text-white text-[18px]">
          We focus on ergonomics and <br /> meeting you where you work.
        </p>
      </div>
    );
  }
  return (
    <div className={`bg-white px-7 py-9 rounded-md shadow-lg`}>
      <img src={image} alt="" />
      <h3 className="text-[27px] text-[#23283E] font-bold py-3">{title}</h3>
      <p className="text-[#737373] text-[18px]">{description}</p>
    </div>
  );
};

export default StartCard;
