import "./newHotel.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import FormHotel from "./formHotel/FormHotel";

const NewHotel = () => {

  return (

    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <FormHotel />
      </div>
    </div>
  );
};

export default NewHotel;
