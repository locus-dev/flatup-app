import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import axios from 'axios'
import {useState, useEffect ,useContext} from 'react'
import FlatUpContext from '../../context/FlatUpContext'



const Widget = ({ type }) => {


  const [token, setToken] = useState({});

  const [userData, setUserData] = useContext(FlatUpContext);

  let data;


  const[json , setJson] = useState([])

  const usuarioQtde = json[0];
  const imovelQtde = json[1];
  const locacaoQtde = json[2];
  const parceiroQtde = json[3];

  console.log(json[0])
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + "/contratolocacao/quantidade", {
              headers: {
                'Authorization':
                  `Bearer ${userData.userToken}`,
              },
              data: userData
            });
            setJson(response.data);
            
        } catch (error) {
            console.log(error);
        }
    };
    fetchData();
}, []);

  switch (type) {
    case "user":
      data = {
        title: "Usuários",
        isMoney: false,
        value: usuarioQtde,
        
      };
      break;
    case "order":
      data = {
        title: "Imóveis",
        isMoney: false,
        value: imovelQtde,
        
      };
      break;
    case "earning":
      data = {
        title: "Locações",
        isMoney: false,
        value: locacaoQtde,
        
      };
      break;
    case "balance":
      data = {
        title: "Parceiros",
        isMoney: false,
       
        value: parceiroQtde,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {data.value}
        </span>
        <span className="link">{data.link}</span>
      </div>
     {/*  <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} 
        </div>
        {data.icon}
      </div> */}
    </div>
  );
};

export default Widget;
