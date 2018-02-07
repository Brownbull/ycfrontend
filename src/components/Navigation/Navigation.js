import React from 'react';
import './Navigation.css';
import CampDeck from '../CampDeck/CampDeck';

const Navigation = ({ Camps }) => {
    return (
        <nav>
            <div className="container">
                <header className="jumbotron pt4 pb3">
                    <div className="container ">
                        <h1 className="tl pa0 ma0">Welcome to YeldCamp!</h1>
                        <p className="tl pa0 ma2">See some camps over the world here, right here</p>
                        <p className="tl pa0 ma0 ">
                            <a className="btn btn-primary grow" href="#">Add new Campground</a>
                        </p>
                    </div>
                </header>

                <div className="row text-center">
                    <CampDeck Camps={Camps} />
                </div>
            </div>     
        </nav>
    ) // eof return
} // eof const Navigation

export default Navigation;