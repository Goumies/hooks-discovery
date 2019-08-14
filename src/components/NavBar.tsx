import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function NavBar() {
    return <ThemeContext.Consumer> {(context) => {
        const {isLightTheme, light, dark} = context;
        const theme = isLightTheme ? light : dark;

        return (
            <nav style={{background: theme.ui, color: theme.syntax}}>
                <h1>Context App</h1>
                <ul>
                    <li key='home'>Home</li>
                    <li key='about'>About</li>
                    <li key='contact'>Contact</li>
                </ul>
            </nav>
        )
    }}</ThemeContext.Consumer>;
}

export default NavBar;