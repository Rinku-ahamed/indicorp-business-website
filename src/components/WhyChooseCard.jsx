/* eslint-disable react/prop-types */
const WhyChooseCard = ({ image, text, subText }) => {
  return (
    <div className="text-center shadow-md space-y-2 pb-4">
      <img src={image} alt="" className="mx-auto" />
      <h3 className="text-3xl text-[#23283E] font-semibold">{text}</h3>
      <p className="text-[#737373] font-semibold">{subText}</p>
    </div>
  );
};

export default WhyChooseCard;
