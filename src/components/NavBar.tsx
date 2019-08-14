import React/*, { Component } */from "react";

function NavBar(props: any) {
    const { isLightTheme, light, dark } = props;
    const theme = isLightTheme ? light : dark;

    return (
        <nav style={{ background: theme.ui, color: theme.syntax }}>
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