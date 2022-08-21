import Footer from "../../../../components/footer/Footer";
import Navbar from "../../../../components/navbar/Navbar";
import FeaturedProperties from "../../../../components/featuredProperties/FeaturedProperties";

const MeusImoveis = () => {
	return (
    <>
        <Navbar />
        <div className="container d-flex flex-column align-items-center justify-content-center" style={{height: "100vh"}}>
            <h2 className="mb-4">Meus Imóveis</h2>
            <FeaturedProperties />
        </div>
        <Footer/>
    </>
    )
};

export default MeusImoveis;