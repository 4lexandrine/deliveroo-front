import React from "react";
import logo from "../assets/Deliveroo_logo.svg"

const Header = ({ name, description, picture }) => {

    return (
        <header>
            <div className="header">
                <img className="logo" src={logo} alt="" />
                <hr />
                <div className="header-container">
                    <div>
                        <h1>{name}</h1>
                        <p>{description}</p>
                    </div>
                    <img className="home-img" src={picture} alt="" />
                </div>
            </div>
        </header >
    );
}

export default Header;