import React from "react";

import {LoadImages} from "../../api";

import Image from "../image/image";

const Home = ()=>{

  const data = LoadImages();

  console.log(data);

    return(
        <div>
        {
            data.map((img)=>{
                return(
                  <Image images={img}></Image>
                )    })
        }
        </div>
    )
}

export default Home;