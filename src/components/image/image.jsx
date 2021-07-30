import React from "react";

const Image = (props)=>{

    return(
        <div>
        <img src={props.images.url_sq} alt="loading..."></img>
        </div>
    )
}

export default Image;