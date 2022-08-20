import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import axios from 'axios'
import {useState, useEffect ,useContext} from 'react'
import FlatUpContext from '../../context/FlatUpContext'

const Featured = () => {

  const [token, setToken] = useState({});

  const [userData, setUserData] = useContext(FlatUpContext);



  const[valorTotal, setValorTotal] = useState('')
 // console.log(valorTotal)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_API_URL + "/contratolocacao/valorTotal", {
          headers: {
            'Authorization':
              `Bearer ${userData.userToken}`,
          },
          data: userData
        });
        setValorTotal(response.data);

      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);



  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total De Contratos de Locações Realizados</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar text={valorTotal /100 + '%'} strokeWidth={5} />
        </div>
        <p className="title">Total De Contratos Locações:</p>
        <p className="amount">R$ {valorTotal}</p>

        {/*   <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Featured;
