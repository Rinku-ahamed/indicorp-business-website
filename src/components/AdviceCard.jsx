/* eslint-disable react/prop-types */
const AdviceCard = ({ image, text, subText }) => {
  return (
    <div>
      <div className="px-3 md:px-8 pb-4 pt-2">
        <h3 className="text-[#23283E] text-[22px] md:text-xl font-semibold sm:leading-[24px]">
          {text}
        </h3>
        <p className="text-[#737373]">{subText}</p>
      </div>
      <img src={image} alt="" className="w-full" />
    </div>
  );
};

export default AdviceCard;
