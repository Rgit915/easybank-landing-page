import onlineBanking from "../assets/images/icon-online.svg";
import budgeting from "../assets/images/icon-budgeting.svg";
import onboarding from "../assets/images/icon-onboarding.svg";
import openApi from "../assets/images/icon-api.svg";
const Easybank = () => {
  return (
    <section className="why-choose-easybank bg-neutral-light-grayish-blue flex flex-col items-center justify-center text-center px-6 py-12">
      <div>
        <h2 className="">Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="features">
        <article>
          <img
            src={onlineBanking}
            alt="Illustration of online banking on a device"
          />
          <h3>Online Banking</h3>
          <p>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </article>
        <article>
          <img
            src={budgeting}
            alt="Illustration of budgeting tools and charts"
          />
          <h3>Simple Budgeting</h3>
          <p>
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
        </article>
        <article>
          <img src={onboarding} alt="Illustration of user onboarding process" />
          <h3> Fast Onboarding</h3>
          <p>
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </article>
        <article>
          <img src={openApi} alt="Illustration of open API connectivity" />
          <h3>Open API</h3>
          <p>
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Easybank;
