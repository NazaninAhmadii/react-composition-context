import React from 'react';

export const themes = {
    green: {
        color: "green"
    },
    red: {
        color: "red"
    }
}

export const ThemeContext = React.createContext({
    theme: themes.green,
    toggleTheme: () => { }
})

