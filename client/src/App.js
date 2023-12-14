import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Register from "./components/Register";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState()
  useEffect(() => {
    // setUser(window.sessionStorage.getItem("user"));
    const userData = window.sessionStorage.getItem("user");
    if(userData){
      setUser(JSON.parse(userData));
    }
  }, []);
  console.log(user?.id);
  return (

    <Routes>
      <Route
        path="/"
        element={user ?
          <Layout user={user} setUser={setUser}>
            <Homepage user={user} />
          </Layout>: <Login setUser={setUser} />
        }
      />
      <Route path="/register" element={<Register setUser={setUser} />} />
    </Routes>
  );
}

export default App;
