import React from 'react';

const Header = () => {
    let name = 'Gabriel';
    return (
        <div className="w-100 bg-black-05">
            <nav className="container navbar mb4 ">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand grow" href="/">YelpCamp</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            {/* <% if (!currentUser){ %> */}
                            <li><a href="/login" className="grow">Login</a></li>
                            <li><a href="/register" className="grow">Sign Up</a></li>
                            {/* <% } else { %> */}
                            <li><a className="grow" href="#">
                                {`Signed in as ${name}`}
                            </a></li>
                            <li><a className="grow" href="/logout">Logout</a></li>
                            {/* <% } %> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    ) // eof return
} // eof const Header

export default Header;


