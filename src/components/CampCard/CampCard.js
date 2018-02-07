import React from 'react';
import "./CampCard.css"

const CampCard = ({ key, name, image, price }) => {
    return (
        <section className="col-md-3 col-sm-6 pa2 pa3-ns">
            <article className="dib bw2 shadow-5 br3 ma3 w-100 ">
                <img src={`${image}/?200x200`} className="db" alt="Camp" />
                {/* <img src="{`https://robohash.org/?200x200`}" className="" alt="Campground Photo" /> */}
                <div className="bt b--black-20 pa2">
                    <a className="link f3 fw6 db black hover-blue mb0 pointer" >{`${name}`}</a>
                    <p className="f4 gray mv1">{`$${price} per night`}</p>
                    <a className="btn btn-primary grow" href="#0">More Info</a>
                </div>
            </article>
        </section>
    ); // eof return
} //eof const CampCard

export default CampCard;