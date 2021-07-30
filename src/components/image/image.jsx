import React , {Component} from "react";
import PropTypes from "prop-types";
import {GridList, GridListTile} from "@material-ui/core";
import {IconButton} from "@material-ui/core";
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import {Dialog} from "@material-ui/core";
import {FlatButton} from "@material-ui/core/Button/Button";


class Image extends Component{
    state = {
        open:false,
        currentImg:""
    }
    handleOpen = (image)=>{
        this.setState({open:true, currentImg:image})
    }
    handleClose = ()=>{
        this.setState({open:false})
    }
    render(){
        let imageList;
       // console.log(this.props);
        const {images} = this.props;
      console.log(images);
        if(images){
       imageList = (
           <GridList cols={5}>
           {
               images.map(img=>{
                   return(
                       <GridListTile title={img.title} key={img.id} actionIcon={
                       <IconButton onClick={()=>this.handleOpen(img.url_sq)}>
                       <ZoomInIcon color="white"></ZoomInIcon>
                       </IconButton>
                    }>
                    <img src={img.url_sq} alt="Loading..."></img>
                    </GridListTile>
               )
            })
           }</GridList>
       )
        }
        else{
            imageList=null;
        }
        const action = [<FlatButton label="Close" primary={true} onClick={this.handleClose}>
            </FlatButton>]
            
        return(
            <div style = {{marginLeft:50,marginRight:50,marginTop:20}}>
            {imageList}
            <Dialog actions={action} modal={false} open={this.state.open} onRequestClose={this.handleClose}></Dialog>
            <img src={this.state.currentImg} alt="..." style = {{width:"100&"}}></img>
            </div>
        )
    }
}

Image.propTypes = {
    images:PropTypes.array.isRequired
};

export default Image;