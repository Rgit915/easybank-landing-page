import imageCurrency from "../assets/images/image-currency.jpg";
import imageRestaurant from "../assets/images/image-restaurant.jpg";
import imagePlane from "../assets/images/image-plane.jpg";
import imageConfetti from "../assets/images/image-confetti.jpg";

const articles = [
  {
    id: 1,
    image: imageCurrency,
    alt: "Currency notes spread out",
    author: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    content:
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
  },
  {
    id: 2,
    image: imageRestaurant,
    alt: "A fancy restaurant table setup",
    author: "Wilson Hutton",
    title: "Treat yourself without worrying about money",
    content:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
  },
  {
    id: 3,
    image: imagePlane,
    alt: "Airplane flying in the sky",
    author: "Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    content:
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
  },
  {
    id: 4,
    image: imageConfetti,
    alt: "Confetti celebrating the launch",
    author: "Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    content:
      "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
  },
];
const Articles = () => {
  return (
    <section
      className="latest-articles flex flex-col justify-between gap-8 px-6 py-12 bg-white text-left"
      aria-labelledby="articles-heading"
    >
      <h2
        id="articles-heading"
        className="text-center md:text-left md:p-0 xl:ml-14"
      >
        Latest Articles
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 max-w-7xl mx-auto">
        {articles.map(({ id, image, alt, author, title, content }) => (
          <article key={id}>
            <img src={image} alt={alt} className="w-full" />
            <div>
              <span>By {author}</span>
              <h4>{title}</h4>
              <p>{content}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Articles;
