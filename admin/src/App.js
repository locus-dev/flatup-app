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
              <Route  path="/login" element={<Login />} />
              <Route
                index
                element={

                  <Home />

                }>
              </Route>
              <Route path="users">
                <Route
                  index
                  element={

                    <ListUsers  />

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

                    <NewUser  />

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
              <Route path="rooms">
                <Route
                  index
                  element={

                    <List columns={roomColumns} />

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

                    <NewRoom />

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

export default App ;
