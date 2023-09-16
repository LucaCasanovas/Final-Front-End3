import React from "react";
import {Link} from "react-router-dom"
import {useGlobalContext} from '../context/Context'

const Navbar = () =>{
    const { state, dispatch } = useGlobalContext();


    const toggleTheme = () => {
      dispatch({ type: "TOGGLE_THEME" });
    }

    return (
    <div className={`header ${state.theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
        <h3>DH Odonto</h3>
        <nav>
        <Link to="/Home">Home</Link>
        <Link to="/Contacts">Contacts</Link>
        <Link to="/Favs">Favs</Link>
        <button onClick={toggleTheme}>
        ☽ {state.theme === "light" ? "Dark" : "Light"}
        </button>
        </nav>
    </div>
    )
}
export default Navbar;