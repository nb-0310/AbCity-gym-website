import FooterLogo from "../../images/logo/logo.png";

function Footer() {
  return (
    <>
      <footer className="bg-[#353535]">
        <div className="container page-padding py-[10rem]">
          <div className="flex justify-between min620:flex-col min620:items-center min620:text-center min620:gap-[5rem] !text-left">
            <div className="flex flex-col w-1/3 gap-8">
              <img src={FooterLogo} alt="footer_logo" className="w-[18rem]" />
              <p className="text-[15px] font-medium text-white">
                Take your health and body to the next level with our
                comprehensive program designed to help you reach your fitness
                goals.
              </p>
              <div className="flex gap-7 text-[18px] text-white min540:justify-center">
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-facebook-f bg-[#262626] p-4 rounded-full px-[14px] hover:bg-[#ff0366] hover:text-white"
                ></i>
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-twitter bg-[#262626] p-4 rounded-full hover:bg-[#ff0366] hover:text-white"
                ></i>
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-pinterest-p bg-[#262626] p-4 rounded-full px-[14px] hover:bg-[#ff0366] hover:text-white"
                ></i>
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-youtube bg-[#262626] p-4 rounded-full hover:bg-[#ff0366] hover:text-white"
                ></i>
              </div>
              <p className="text-[16px] font-medium text-white">
                Privacy Policy | © {new Date().getFullYear()} AbCity
              </p>
            </div>

            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main text-white">Our Classes</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-white font-medium hover:font-bold">
                Fitness Classes
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-white font-medium hover:font-bold">
                Aerobics Classes
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-white font-medium hover:font-bold">
                Power Yoga
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-white font-medium hover:font-bold">
                Learn Machines
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-white font-medium hover:font-bold">
                Full-body Strength
              </p>
            </div>

            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main text-white">Working Hours</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

              <p className="text-[16px]  text-white font-bold">
                Monday - Friday:
              </p>
              <p className="text-[16px] text-white font-medium">
                7:00am - 21:00pm
              </p>
              <p className="text-[16px] text-white font-bold">Saturday:</p>
              <p className="text-[16px] text-white font-medium">
                7:00am - 19:00pm
              </p>
              <p className="text-[16px] text-white font-bold ">
                Sunday - Closed
              </p>
            </div>
            
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
