import React from "react";

import Search from "../search/search";

import {LoadImages} from "../../api";
const Home = ()=>{

    // getting the data from the api
const data = LoadImages();
 

// passing the data to search component
    return(
        <div> 
        <Search data={data}></Search>          
        </div>
    )
}

export default Home;