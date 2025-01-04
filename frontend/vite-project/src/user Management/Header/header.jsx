import React from "react";
import { NavLink } from "react-router-dom";
import './header.css';

const Header = () => {
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown if the user clicks outside of it
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
          const openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="header">
      <div className="dropdown">
        <button onClick={myFunction} className="dropbtn">Dropdown</button>
        <div id="myDropdown" className="dropdown-content">
          <NavLink className="navbar-brand" to="/signup">Signup</NavLink>
          <NavLink className="navbar-brand" to="/login">Login</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
