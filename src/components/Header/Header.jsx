import React from 'react'
import "../../components/all_css.css"
import "./Header.css"
import {Link} from "react-router-dom";
import "../Navbar/Navbar.css"
import {NavLink} from "react-router-dom"


function Header() {
    
    return (
        <>
        <div className="main-class">
        <div className="home-section" id="home">
        <div className="home-bg"></div>
        <div className="container">
            <div className="row min-vh-100 align-items-center">
                <div className="home-text">
                    <h1>KitchenGuide</h1>
                    <h4 className="tagline">Want to cook something......But doesn't know the recipe....</h4>
                    <h4 className="tagline1" style={{paddingLeft:"70px"}}>Then you are at right place!!!!</h4>    
                    <button className="mybtn" style={{marginLeft:"50px"}} >
                     <Link className="link" to="/find">Search Recipe</Link>
                     </button> 
                     <button className="mybtn" style={{marginLeft:"50px"}} >
                     <Link className="link" to="/popular">Show Suggestions</Link>
                     </button>  
                </div>
            </div>
        </div>
        </div>
          
           
        </div>
        </>
    )
}

export default Header;
