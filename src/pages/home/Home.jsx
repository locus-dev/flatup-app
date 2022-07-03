import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="locatesContainer">

      </div>
      <div className="homeContainer">
          <FeaturedProperties />
          <FeaturedProperties />
          <FeaturedProperties />
          <MailList />
          <Footer />
      </div>
    </div>
  )
}

export default Home