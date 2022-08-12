import "./newHotel.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import FormHotel from "./formHotelUpdate/FormHotel";

const UpdateHotel = () => {

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

export default UpdateHotel;
