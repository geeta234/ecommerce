import React from "react";
import { Link } from  "react-router-dom";

const Home = () =>{
    return (
        <div>
            <h1>Home</h1>
            <a href="/">Home</a>
            <a href="/">Home</a>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
};
export default Home;