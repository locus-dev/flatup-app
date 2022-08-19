import "../../listLocations/formLocation.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import Chart from "../../../components/chart/Chart";
import List from "../../../components/table/Table";

import { useNavigate } from "react-router-dom";
import LocationDetails from "../LocationDetails";

const FormLocation = () => {
  const navigate = useNavigate();

  const redirectList = () => {

    return navigate("/locations/modules")
  }

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          
          <div className="left">

            <h1 className="title">Informações Usuário</h1>
            <LocationDetails />
          </div>
          <div className="bottom">
          <h1 className="title">Últimas locações</h1>
          <List />
           {/*  <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" /> */}
          </div>
          
        </div>
        <div className="botaoVoltar">
        <button className="botaoVoltar" onClick={redirectList}>Voltar</button>
        </div>
        {/* <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          
        </div> */}
        
          
        
      </div>
      
    </div>
  );
};

export default FormLocation;
