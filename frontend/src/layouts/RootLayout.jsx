
import react from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const RootLayout = () => {
  return <>
  <div className="bg-red-600  ">
    
    <header className="">
      <Navbar/>
    </header>
   <main>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab dignissimos voluptas doloribus, facilis  at cumque quibusdam doloremque similique fugit sapiente tempora saepe possimus rem nam est. Ad quos quaerat nam. 

    <Outlet />
   </main>
  </div>
  </>
};
export { RootLayout };
