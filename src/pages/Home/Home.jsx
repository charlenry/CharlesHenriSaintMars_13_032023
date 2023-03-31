import chatIcon from "../../assets/img/icon-chat.png";
import moneyIcon from "../../assets/img/icon-money.png";
import securityIcon from "../../assets/img/icon-security.png";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import FeatureItem from "../../components/FeatureItem/FeatureItem";
import Footer from "../../components/Footer/Footer";

const Home = (props) => {
  return (
    <>
      <Header isConnected={false} />
      <main>
        <Hero />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <FeatureItem
            iconSrc={chatIcon}
            title="You are our #1 priority"
            content="Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes."
          />
          <FeatureItem
            iconSrc={moneyIcon}
            title="More savings means higher rates"
            content="The more you save with us, the higher your interest rate will be!"
          />
          <FeatureItem
            iconSrc={securityIcon}
            title="Security you can trust"
            content="We use top of the line encryption to make sure your data and money
            is always safe."
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
