import React from "react";

import Search from "../search/search";

import {LoadImages} from "../../api";
const Home = ()=>{

const data = LoadImages();
 

    return(
        <div>
        <Search data={data}></Search>
                  
        </div>
    )
}

export default Home;