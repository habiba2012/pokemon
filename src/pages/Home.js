import React from "react";
import LimitSort from "../components/LimitAndSort";
import Navigation from "../components/Navigation";
import Pagination from "../components/Pagination";
import Pokemon from "../components/Pokemon";
import SearchPokemon from "../components/SearchPokemon";

const Home = () => (
    <div>
        <Navigation />
        <div className="container">
            <SearchPokemon />
            <Pagination />
            <LimitSort />
            <Pokemon />
            <Pagination />
        </div>
    </div>
)

export default Home;
