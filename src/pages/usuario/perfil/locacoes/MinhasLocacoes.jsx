import Footer from "../../../../components/footer/Footer";
import Navbar from "../../../../components/navbar/Navbar";
import FeaturedProperties from "../../../../components/featuredProperties/FeaturedProperties";

const MinhasLocacoes = () => {
	return (
    <>
        <Navbar />
        <div style={{marginTop: "8rem"}}>
            <h2>Imóveis que eu já aluguei</h2>
            <FeaturedProperties />
        </div>
        <Footer />
    </>
    )
};

export default MinhasLocacoes;