/* eslint-disable react/prop-types */
const ContactCard = ({ image, isBg }) => {
  return (
    <div
      className={`text-center py-20 px-12 ${isBg && "bg-[#252b42] text-white"}`}
    >
      <img src={image} alt="" className="mx-auto" />
      <p className="mt-3 text-[17px] font-medium">
        georgia.young@example.com <br /> georgia.young@ple.com
      </p>
      <h3 className="mt-4 text-xl font-bold">Get Support</h3>
      <button
        className={`mt-4 border ${
          isBg
            ? "border-white text-white"
            : "border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white"
        } py-2 px-6 rounded-md   duration-200 font-semibold`}
      >
        Submit Request
      </button>
    </div>
  );
};

export default ContactCard;
