import React from 'react';
import './Footer';

var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "15px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var phantom = {
    display: 'block',
    padding: '20px',
    height: '60px',
    width: '100%',
}

const Footer = ({children}) => {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                {children}
                <p className="f7 black-70 dib pr3 mb3">
                    Copyright © UtilOne 2018
                </p>
            </div>
        </div>
    ) // eof return 
} // eof eof const Footer

export default Footer;