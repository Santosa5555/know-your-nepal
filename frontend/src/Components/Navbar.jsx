import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='border-2 rounded-md my-[2%] shadow-md fixed top-[2%] z-40 mb-[6% ] '>
            <ul className=' justify-between mx-[15%] '>
                <li><NavLink className="link" to="/">Home</NavLink> </li>
                <li><NavLink className="link" to="/activity">Activity</NavLink> </li>
                <li><NavLink className="link" to="/budgetplanner">Budget planner</NavLink> </li>
                <li><NavLink className="link" to="/priceguide">priceguide</NavLink> </li>
                <li><NavLink className="link" to="/Help">Help and support</NavLink> </li>
            </ul>

        </div>
    )
}

export default Navbar
