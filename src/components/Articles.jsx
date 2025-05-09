import imageCurrency from "../assets/images/image-currency.jpg";
import imageRestaurant from "../assets/images/image-restaurant.jpg";
import imagePlane from "../assets/images/image-plane.jpg";
import imageConfetti from "../assets/images/image-confetti.jpg";

const Articles = () => {
  return (
    <section className="latest-articles flex flex-col justify-between gap-8 px-6 py-12 bg-white text-left">
      <h2 className="text-center md:text-left md:p-0 xl:ml-14">Latest Articles</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 max-w-7xl mx-auto">
        <article>
          <img src={imageCurrency} alt="" className="w-full"/>
          <div>
            <span>By Claire Robinson</span>
            <h4>Receive money in any currency with no fees</h4>
            <p>
              The world is getting smaller and we’re becoming more mobile. So
              why should you be forced to only receive money in a single …
            </p>
          </div>
        </article>

        <article>
          <img src={imageRestaurant} alt="" className="w-full" />
          <div>
            <span>By Wilson Hutton</span>
            <h4>Treat yourself without worrying about money</h4>
            <p>
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you …
            </p>
          </div>
        </article>

        <article>
          <img src={imagePlane} alt="" className="w-full"/>
          <div>
            <span>By Wilson Hutton</span>
            <h4>Take your Easybank card wherever you go</h4>
            <p>
              We want you to enjoy your travels. This is why we don’t charge any
              fees on purchases while you’re abroad. We’ll even show you …
            </p>
          </div>
        </article>

        <article>
          <img src={imageConfetti} alt="" className="w-full" />
          <div>
            <span>By Claire Robinson</span>
            <h4> Our invite-only Beta accounts are now live!</h4>
            <p>
              After a lot of hard work by the whole team, we’re excited to
              launch our closed beta. It’s easy to request an invite through the
              site ...
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Articles;
