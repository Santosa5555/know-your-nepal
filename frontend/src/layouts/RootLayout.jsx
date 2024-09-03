
import react from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const RootLayout = () => {
  return <>
  <header>
    <Navbar/>
  </header>

  <main>
    <Outlet/>
  </main>
    
    
    
  </>
};
export { RootLayout };
