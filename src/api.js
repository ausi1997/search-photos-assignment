import  { useState } from "react";


function LoadImages(){
    const [photos , setPhotos] = useState([]);
     
    fetch('https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=53d481cc8df4a39b533a80b868e40220&extras=description%2C+url_sq&per_page=500&page=5&format=json&nojsoncallback=1')
        .then(res => res.json())
                  .then(data=> setPhotos(data.photos.photo));
                  return photos;

}

export {LoadImages};