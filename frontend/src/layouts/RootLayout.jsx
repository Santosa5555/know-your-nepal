
import react from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return <>
    This is root layouts
    <Outlet />
  </>
};
export { RootLayout };
