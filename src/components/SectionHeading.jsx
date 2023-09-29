/* eslint-disable react/prop-types */
const SectionHeading = ({ heading, subHeading }) => {
  return (
    <div className="mt-[140px] text-center">
      <h2 className="text-[48px] text-[#23283E] font-semibold ">{heading}</h2>
      <p className="text-[#737373] text-[18px] lg:px-[200px]">{subHeading}</p>
    </div>
  );
};

export default SectionHeading;
