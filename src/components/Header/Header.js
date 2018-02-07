import React from 'react';

const Header = () => {
    let name = 'Gabriel';
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/">YelpCamp</a>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        {/* <% if (!currentUser){ %> */}
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Sign Up</a></li>
                        {/* <% } else { %> */}
                        <li><a href="#">
                            {`Signed in as ${name}`}
                        </a></li>
                        <li><a href="/logout">Logout</a></li>
                        {/* <% } %> */}
                    </ul>
                </div>
            </div>
        </nav>
    ) // eof return
} // eof const Header

export default Header;


