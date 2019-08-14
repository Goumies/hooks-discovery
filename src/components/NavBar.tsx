import React/*, { Component } */from "react";

function NavBar() {
    return (
        <nav>
            <h1>Context App</h1>
            <ul>
                <li key='home'>Home</li>
                <li key='about'>About</li>
                <li key='contact'>Contact</li>
            </ul>
        </nav>
    );
}

export default NavBar;