
import react from "react";
import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return <>
    This is root layouts
    <ul>
        <li><NavLink className="link" to="/">Home</NavLink> </li>
        <li><NavLink className="link" to="/activity">Activity</NavLink> </li>
        <li><NavLink className="link" to="/budgetplanner">Budget planner</NavLink> </li>
        <li><NavLink  className="link" to="/priceguide">priceguide</NavLink> </li>
        <li><NavLink className="link" to="/Help">Help and support</NavLink> </li>
      </ul>
    <Outlet />
  </>
};
export { RootLayout };
