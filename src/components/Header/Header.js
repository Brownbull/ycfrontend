import React from 'react';

const Header = () => {
    let name = 'Gabriel';
    return (
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="/">YelpCamp</a>
                </div>
                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-right">
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


