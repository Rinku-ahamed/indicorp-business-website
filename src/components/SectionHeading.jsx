/* eslint-disable react/prop-types */
const SectionHeading = ({ heading, subHeading }) => {
  return (
    <div className="pt-[140px] text-center lg:w-[490px] mx-auto">
      <h2 className="text-[36px] md:text-[48px] text-[#23283E] font-semibold leading-[55px] mb-4">
        {heading}
      </h2>
      <p className="text-[#737373] text-[16px] md:text-[18px]">{subHeading}</p>
    </div>
  );
};

export default SectionHeading;
