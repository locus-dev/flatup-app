import Footer from "../../../../components/footer/Footer";
import Navbar from "../../../../components/navbar/Navbar";
import FeaturedProperties from "../../../../components/featuredProperties/FeaturedProperties";

const MeusImoveis = () => {
	return (
    <>
        <Navbar />
        <div style={{marginTop: "8rem"}}>
            <h2>Meus Imóveis</h2>
            <FeaturedProperties />
        </div>
        <Footer />
    </>
    )
};

export default MeusImoveis;