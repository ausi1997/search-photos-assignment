import  { useEffect, useState } from "react";

function LoadImages(){
    const [photos , setPhotos] = useState([]);

    // calling the api using fetch method

     useEffect(()=>{
        fetch('https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=53d481cc8df4a39b533a80b868e40220&extras=description%2C+license%2C+date_upload%2C+date_taken%2C+owner_name%2C+icon_server%2C+original_format%2C+last_update%2C+geo%2C+tags%2C+machine_tags%2C+o_dims%2C+views%2C+media%2C+path_alias%2C+url_sq%2C+url_t%2C+url_s%2C+url_q%2C+url_m%2C+url_n%2C+url_z%2C+url_c%2C+url_l%2C+url_o&per_page=500&page=5&format=json&nojsoncallback=1')
        .then(res => res.json())
                  .then(data=> setPhotos(data.photos.photo));
     },[])

     return photos;
}

export {LoadImages};

