import Container from "./Container";
import Send from "../data/carbon_send-alt.png";
import Phone from "../data/bx_bx-phone.png";
import Map from "../data/bx_bx-map.png";
import Social from "../data/social media.png";
const Footer = () => {
  return (
    <footer className="mt-[80px]">
      <>
        <Container></Container>
      </>
      {/* Footer widget */}
      <section className="bg-[#008A8C] py-9 mt-8">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div>
              <h3 className="text-white text-2xl mb-5">Company Info</h3>
              <ul className="text-slate-200 flex flex-col gap-3 text-[17px] font-semibold">
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-2xl mb-5">Legal</h3>
              <ul className="text-slate-200 flex flex-col gap-3 text-[17px] font-semibold">
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-2xl mb-5">Features</h3>
              <ul className="text-slate-200 flex flex-col gap-3 text-[17px] font-semibold">
                <li>Business Marketing</li>
                <li>User Analytic</li>
                <li>Live Chat</li>
                <li>Unlimited Support</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-2xl mb-5">Resources</h3>
              <ul className="text-slate-200 flex flex-col gap-3 text-[17px] font-semibold">
                <li>IOS & Android</li>
                <li>Watch a Demo</li>
                <li>Customers</li>
                <li>API</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-2xl mb-5">Get In Touch</h3>
              <ul className="text-slate-200 flex flex-col gap-3 text-[17px] font-semibold">
                <li className="flex gap-[12px] items-center">
                  <img src={Phone} alt="" />
                  <span>(480) 555-0103</span>
                </li>
                <li className="flex gap-[12px] items-center py-[10px]">
                  <img src={Map} alt="" />
                  <span>4517 Washington Ave.</span>
                </li>
                <li className="flex gap-[12px] items-center">
                  <img src={Send} alt="" />
                  <span>debra.holt@example.com</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
      {/* Bottom Footer copyright */}
      <Container>
        <div className="sm:flex justify-between items-center py-3">
          <div>©{new Date().getFullYear()} All Right Reserved</div>
          <div>
            <img src={Social} alt="" />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
