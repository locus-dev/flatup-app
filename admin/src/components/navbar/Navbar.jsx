import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState, useEffect  } from "react";
import Login from "../../pages/login/Login";
import FlatUpContext from '../../../src/context/FlatUpContext';
import { color } from "@mui/system";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'


const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);


  const location = useLocation();
  location.state = location.state ? location.state : {};

  const [userData, setUserData] = useContext(FlatUpContext);

  const[usuarioLogado, setUsuarioLogado] = useState({})
  //console.log(usuarioLogado)

  

  /* const clicada = () => {
    setEmail(userData.userId)
  } */

  //console.log(userData.userId)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_API_URL + `/usuario/encontrar/${userData.userId}`, {
          headers: {
            'Authorization':
              `Bearer ${userData.userToken}`,
              'Access-Control-Allow-Origin':
                '*'
          },
          data: userData.userToken
        });
        setUsuarioLogado(response.data);
        console.log(response.data)
        
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);


  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          {/* <input type="text" placeholder="Search..." /> */}
          {/* <SearchOutlinedIcon /> */}
        </div>
        <div className="items">
          {/* <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div> */}
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>


          <div className="item">
            <p><strong >{usuarioLogado.email}</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;