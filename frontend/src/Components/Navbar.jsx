import React from 'react'

const Navbar = () => {
  return (
    <div>
           <ul>
        <li><NavLink className="link" to="/">Home</NavLink> </li>
        <li><NavLink className="link" to="/activity">Activity</NavLink> </li>
        <li><NavLink className="link" to="/budgetplanner">Budget planner</NavLink> </li>
        <li><NavLink  className="link" to="/priceguide">priceguide</NavLink> </li>
        <li><NavLink className="link" to="/Help">Help and support</NavLink> </li>
      </ul>
      
    </div>
  )
}

export default Navbar
