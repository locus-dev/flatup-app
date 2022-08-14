import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";

import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { hotelColumns, roomColumns, userColumns } from "./datatablesource";
import NewHotel from "./pages/newHotel/NewHotel";
import NewRoom from "./pages/newRoom/NewRoom";

import { useContext, useState } from "react";

import FlatUpContext from "./context/FlatUpContext";
import NewUser from "./pages/newUser/NewUser";
import ListUsers from "./pages/listUsers/ListUsers";

import ListHotels from "./pages/listHotels/ListHotels";
import ListPartners from "./pages/listPartners/ListPartners";
import NewPartner from "./pages/newPartner/NewPartner";
import UpdateUser from "./pages/updateUser/UpdateUser";
import UpdateHotel from "./pages/updateHotel/UpdateHotel";
import ListLocations from "./pages/listLocations/ListLocations";
import FormLocation from "./pages/listLocations/formLocation/FormLocation";
import Locador from "./pages/listLocations/formLocation/components/Locador";
import Module from "./pages/listLocations/module/Module";
import Location from "./pages/listLocations/Location";
import LocationDetails from "./pages/listLocations/LocationDetails";

function App() {
  const { darkMode } = useContext(DarkModeContext);


  let context = useContext(FlatUpContext);

  const [userData, setUserData] = useState(context);
  

  /* const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  }; */

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <FlatUpContext.Provider value={[userData, setUserData]}>
          <Routes>
            <Route path="/" >
              <Route path="/" element={<Login />} />
              <Route
                path="/home"
                element={

                  <Home />

                }>
              </Route>
              <Route path="users">
                <Route
                  index
                  element={

                    <ListUsers />

                  }
                />
                <Route
                  path=":userId"
                  element={

                    <Single />

                  }
                />
                <Route
                  path="new"
                  element={

                    <NewUser />

                  }
                />
                <Route
                  path="edit/:id"
                  element={

                    <UpdateUser />

                  }
                />

              </Route>
              <Route path="hotels">
                <Route
                  index
                  element={

                    <ListHotels />

                  }
                />
                <Route
                  path="edit/:id"
                  element={

                    <UpdateHotel />

                  }
                />
                <Route
                  path=":productId"
                  element={

                    <Single />

                  }
                />
                <Route
                  path="new"
                  element={

                    <NewHotel />

                  }
                />
              </Route>
              <Route path="partners">
                <Route
                  index
                  element={

                    <ListPartners />

                  }
                />
                <Route
                  path=":productId"
                  element={

                    <Single />

                  }
                />
                <Route
                  path="new"
                  element={

                    <NewPartner />

                  }
                />
              </Route>
              <Route  path="locations">
                <Route
                  index
                  path="modules"
                  element={

                    <ListLocations />

                  }
                />
                {/* <Route
                  index
                  path="modules"
                  element={

                    <Module />

                  }
                /> */}
                {/* <Route
                  path="modules/listLocations/locationDetails"
                  render={(props) => <Locador {...props}/>}
                  element={

                    <FormLocation />

                  }
                /> */}
                {<Route
                  path=""
                  //render={(props) => <Location {...props}/>}
                  element={

                    <Location />

                  } 
                />}
                
                <Route
                  path="modules/listLocations/locationDetails"
                  render={(props) => <LocationDetails {...props}/>}
                  element={

                    <FormLocation />

                  }
                />
                
               
              </Route>
            </Route>
          </Routes>
        </FlatUpContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
