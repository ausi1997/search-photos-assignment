import React from "react";

import {LoadImages} from "../../api";

import Image from "../image/image";

const Home = ()=>{

  const data = LoadImages();

  console.log(data);

    return(
        <div>
                  <Image images={data && data}></Image>
        </div>
    )
}

export default Home;