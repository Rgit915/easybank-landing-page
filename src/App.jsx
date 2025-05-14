import Articles from "./components/Articles";
import Easybank from "./components/Easybank";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

import "./index.css";

const App = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Easybank />
      <Articles />
      <Footer />
    </main>
  );
};

export default App;
