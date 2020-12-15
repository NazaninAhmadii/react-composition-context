import React from 'react';
import './layput.css';
import { ThemeContext } from '../context/ThemeContext';



const Layout = (props) => {
    return (
        <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
                // console.log(theme)
                <div div style={{ textAlign: 'center' }}>
                    <button onClick={toggleTheme}>Change theme</button>
                    <div className="container">
                        <div className="col-top-left border" style={{ borderColor: theme.color }}>
                            {props.card1}
                        </div>
                        <div className="col-top-right border" style={{ borderColor: theme.color }}>
                            {props.card2}
                        </div>
                        <div className="col-bottom-left border" style={{ borderColor: theme.color }}>
                            {props.card3}
                        </div>
                        <div className="col-bottom-rigth border" style={{ borderColor: theme.color }}>
                            {props.card4}
                        </div>
                    </div>
                </div>
            )
            }
        </ThemeContext.Consumer >
    )
}


export default Layout;