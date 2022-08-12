import "../../listLocations/formLocation.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import Chart from "../../../components/chart/Chart";
import List from "../../../components/table/Table";
import Locador from "./components/Locador";

const FormLocation = () => {



  return (
    <div className="single">
      
      <div className="singleContainer">
      
        <div className="top">
          <div className="left">
            
            <h1 className="title">Information</h1>
            <Locador />
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default FormLocation;
