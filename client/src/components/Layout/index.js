import React from "react";
import NavBar from "./Navbar";

function Layout({ children, user, setUser}) {
  return (
    <>
      <NavBar user={user} setUser={setUser} />
      {children}
    </>
  );
}

export default Layout;
