import React, { createContext } from "react";

const state = {
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', background: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', background: '#555' }
}


export const ThemeContext = createContext(state);

function ThemeContextProvider(props: { children: React.ReactNode; }) {
    return (
        <ThemeContext.Provider value={{...state}}>
            { props.children }
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;