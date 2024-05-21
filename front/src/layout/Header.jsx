import React from 'react'
import { NavLink } from 'react-router-dom'
import "./header.css"
const Header = () => {
  return (
    // <div className='container'>
<header>
    <h1 className='headtext'>FOUNDATION</h1>
    <nav>
        <ul>
            <li>
                <NavLink to={"/"} className={(navData)=>navData.isActive?"active":""}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/about"} className={(navData)=>navData.isActive?"active":""}>About</NavLink>
            </li>
            <li>
                <NavLink to={"/discover"} className={(navData)=>navData.isActive?"active":""}>Discover</NavLink>
            </li>
            <li>
                <NavLink to={"/detail"} className={(navData)=>navData.isActive?"active":""}>Detail</NavLink>
            </li>
            <li>
                <NavLink to={"/add"} className={(navData)=>navData.isActive?"active":""}>Add</NavLink>
            </li>
        </ul>
    </nav>
</header>
    // </div>
  )
}

export default Header