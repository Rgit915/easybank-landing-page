import bgDesktop from "../assets/images/bg-intro-desktop.svg";
import bgMobile from "../assets/images/bg-intro-mobile.svg";
import mockUps from "../assets/images/image-mockups.png";

const Hero = () => {
  return (
    <section className="hero flex flex-col justify-between items-center pb-8 bg-white">
      <div>
        <picture>
          <source media="(min-width: 768px)" srcSet={bgDesktop} />
          <img
            src={bgMobile}
            alt="background image"
            className="bg-no-repeat bg-center bg-cover"
          />
        </picture>
        <img
          src={mockUps}
          alt="Mobile screens showing finances"
          className=" absolute -top-12 z-10"
        />
      </div>
      <article className="flex flex-col justify-between items-center w-full gap-4 px-6 pb-10 text-center">
        <h1 className="text-4xl font-light text-primary-dark-blue tracking-[-0.71px]"> Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className="request-button">Request Invite</button>
      </article>
    </section>
  );
};

export default Hero;
