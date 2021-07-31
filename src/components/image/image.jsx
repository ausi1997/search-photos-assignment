import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { Dialog } from "@material-ui/core";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      marginLeft:'30px',
      marginRight:'30px'
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));

const Image = (props)=>{

    const [open,setOpen] = useState(false);
    const [currentImg , setCurrentImg] = useState('');
    const classes = useStyles();

   const handleOpen = (image)=>{
        setOpen(true);
        setCurrentImg(image);
    }
  const handleClose = ()=>{
        setOpen(false);
    }

    return(
        <div className={classes.root}>
      <ImageList rowHeight={200} cols={4}>
        {props.images && props.images.map((item) => (
          <ImageListItem>
            <img src={item.url_z} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              actionIcon={
                <IconButton aria-label={`info about ${item.title}`} onClick={()=>{handleOpen(item.url_c)}} className={classes.icon}>
                  <InfoIcon />
                </IconButton> 
              }
            />
            <div style = {{marginLeft:50,marginRight:50,marginTop:20}}>
            <Dialog open={open} modal={false}>
            <img src={currentImg && currentImg} alt="loading..." style = {{width:"100%"}}></img>
            <Button onClick={()=>{handleClose()}} color="primary">
                Close
          </Button>
          </Dialog>
          </div>
          </ImageListItem>
          
        ))}
      </ImageList>
    </div>
    )
}

export default Image;