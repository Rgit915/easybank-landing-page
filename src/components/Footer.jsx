import logo from "../assets/images/logo_easybank.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-12 py-12 bg-primary-dark-blue w-full text-white text-center md:flex-row md:justify-around md:items-start">
      <div className="md:flex md:flex-col gap-10">
        <img src={logo} alt="easybank logo" />
        <div className="social-medias flex justify-between items-center mt-8">
        <i className="fa-brands hover:text-primary-lime-green hover:scale-110 transition-transform duration-200 cursor-pointer fa-square-facebook"></i>
        <i className="fa-brands hover:text-primary-lime-green hover:scale-110 transition-transform duration-200 cursor-pointer fa-square-youtube"></i>
        <i className="fa-brands hover:text-primary-lime-green hover:scale-110 transition-transform duration-200 cursor-pointer fa-twitter"></i>
        <i className="fa-brands hover:text-primary-lime-green hover:scale-110 transition-transform duration-200 cursor-pointer fa-pinterest"></i>
        <i className="fa-brands hover:text-primary-lime-green hover:scale-110 transition-transform duration-200 cursor-pointer fa-instagram"></i>
        </div>
      </div>
      <nav aria-label="Footer navigation" className="md:flex md:items-center md:gap-8 md:text-left lg:gap-16 lg:px-12">
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
        <ul>
          <li><a href="#">careers</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </nav>
      <div className="flex flex-col justify-center items-center gap-10 ">
      <button className="request-button">Request Invite</button>
        <p>© Easybank. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
