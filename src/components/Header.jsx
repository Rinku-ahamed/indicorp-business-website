import { Link } from "react-router-dom";
import Container from "./Container";

const Header = () => {
  const navMenu = (
    <ul className="flex list-none gap-7 text-[#737373]">
      <li>
        <Link to="#hero">Home</Link>
      </li>
      <li>
        <Link to="#hero">Product</Link>
      </li>
      <li>
        <Link to="#hero">Services</Link>
      </li>
      <li>
        <Link to="#hero">Contact</Link>
      </li>
    </ul>
  );
  return (
    <header className="fixed w-full">
      <Container>
        <div className="flex gap-3 items-center justify-between pt-5">
          <div>
            <Link to="/" className="text-3xl text-[#23283E] font-bold">
              Your Logo
            </Link>
          </div>
          <div className="hidden md:block">{navMenu}</div>
          <div>
            <button className="bg-[#537DC3] text-white py-2 px-8 rounded-[100px] font-semibold hover:bg-[#2290C7] duration-200">
              Contact
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
