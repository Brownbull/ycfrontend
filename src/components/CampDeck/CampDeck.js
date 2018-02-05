import React from "react";
import CampCard from "../CampCard/CampCard";

const CampDeck = ({ Camps }) => {
    return (
        <div>
            {createDeck(Camps)}
        </div>
    ); // eof return
} // eof const CampDeck 

export default CampDeck;

// Functions
function createDeck(Camps) {
    return Camps.map((Camp, i) => {
        return (
            <CampCard
                key={i}
                name={Camp.name}
                image={Camp.image}
                price={Camp.price}
            />
        ); // eof return
    }); // eof  return CampCards.map
} // eof function createDeck