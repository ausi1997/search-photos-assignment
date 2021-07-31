
import Image from "../image/image";

import React , { Component } from "react";

class Search extends Component{
    state = {
        searchText : '',
        images :[]
    };

    onTextChange = (e)=>{
        console.log(this.props.data);
        const val = e.target.value;
         this.setState({[e.target.name]:val},()=>{
             if(val === ""){
                 this.setState({images:[]});
             }
             else{
            fetch(       // calling the search api
                `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=53d481cc8df4a39b533a80b868e40220&text=${this.state.searchText}&safe_search=1&extras=description%2C+url_sq%2Curl_z%2Curl_c&per_page=500&page=5&format=json&nojsoncallback=1`
            ).then(res => res.json())
            .then(data=>
                this.setState({images:data.photos.photo})
            ).catch(err=>{
                console.log(err);
            })
          } });
    };

    render(){                  // if we have not search any images then it will pass the default data otherwise the searched data
        console.log(this.state.images);
        return(
            <div>
            <input type="text" style = {{backgroundColor:"black",
                 color:"white",
                  marginLeft:420,
                  marginTop:100,
                  paddingTop:20,
                  paddingLeft:70,
                  fontSize:30,
                borderTopStyle:"hidden",
                borderRightStyle:"hidden",
                borderLeftStyle:"hidden",
                outline:"none",
                borderBottomStyle:"groove"}} placeholder= "Search for images..." name = "searchText" value={this.state.searchText}
                onChange = {this.onTextChange} ></input>
                <br></br><br></br>
                {this.state.images.length>0?(<Image images={this.state.images}></Image>)
                :(<Image images={this.props.data}></Image>)
            }
            </div>
          
        )
    }
}
export default Search;