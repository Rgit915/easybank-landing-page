import logo from "../assets/images/logo_easybank.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-12 py-12 bg-primary-dark-blue w-full text-white text-center">
      <div className="">
        <img src={logo} alt="easybank logo" />
        <div className="social-medias flex justify-between items-center mt-8">
        <i class="fa-brands fa-square-facebook"></i>
        <i class="fa-brands fa-square-youtube"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-pinterest"></i>
        <i class="fa-brands fa-instagram"></i>
        </div>
      </div>
      <nav aria-label="Footer navigation">
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
      <div className="flex flex-col justify-center items-center gap-6 ">
      <button className="request-button">Request Invite</button>
        <p>© Easybank. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
