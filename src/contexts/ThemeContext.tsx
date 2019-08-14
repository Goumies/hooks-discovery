import React, { createContext } from "react";

let defaultValue = {
    isLightTheme: true,
    light: { syntax: '', ui: '', background: '' },
    dark: { syntax: '', ui: '', background: '' }
};
export const ThemeContext = createContext(defaultValue);

function ThemeContextProvider(props: { children: React.ReactNode; }) {
    const state = {
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', background: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', background: '#555' }
    }

    return (
        <ThemeContext.Provider value={{...state}}>
            { props.children }
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;