import bgDesktop from "../assets/images/bg-intro-desktop.svg";
import bgMobile from "../assets/images/bg-intro-mobile.svg";
import mockUps from "../assets/images/image-mockups.png";

const Hero = () => {
  return (
    <section
    className="hero flex flex-col-reverse bg-white lg:grid lg:grid-cols-2 gap-8 lg:place-items-center w-full"
  >
    <div className="px-5 py-20 text-center max-w-xl mx-auto md:mt-35 lg:text-left xl:pr-25">
      <h1 className="text-4xl text-primary-dark-blue tracking-[-0.71px] mb-6 lg:text-6xl">
        Next generation digital banking
      </h1>

      <p>
        Take your financial life online. Your Easybank account will be a
        one-stop-shop for spending, saving, budgeting, investing, and much
        more.
      </p>
      <button className="request-button my-5">Request Invite</button>
    </div>

    <article className="relative">
      <picture>
        <source
          media="(min-width: 768px)"
          srcset={bgDesktop}
        />
        <img src={bgMobile} alt="background image" className="w-full" />
      </picture>

      <img
        src={mockUps}
        alt="Mobile screens showing finances"
        className="absolute -top-12"
      />
    </article>
  </section>
  );
};

export default Hero;
