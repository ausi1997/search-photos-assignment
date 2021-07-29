import React, { Component } from 'react';
import Image from "../image/image";

class Home extends Component{
    constructor(){
        super()
        this.state={              
            photos:[] 
        }
    }

    componentDidMount(){
        console.warn('app mounted');            // using fetch method to call the api
        fetch('https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=53d481cc8df4a39b533a80b868e40220&extras=description%2C+url_sq&per_page=500&page=5&format=json&nojsoncallback=1')
        .then(res => res.json())
                  .then(data=> this.setState({ photos:data.photos }));
                   } 


    render(){
     //   console.log(this.state.photos.photo);
        return(
            <div>
            <div>
            <Image images={this.state.photos.photo}></Image>
            </div>
            </div>
        )
    }
}


export default Home;
// Key:
// 53d481cc8df4a39b533a80b868e40220

// Secret:
// 04829720a638d07b