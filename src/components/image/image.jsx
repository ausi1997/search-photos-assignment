import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

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
    const classes = useStyles();
    return(
        <div className={classes.root}>
      <ImageList rowHeight={200} cols={4}>
        {props.images.map((item) => (
          <ImageListItem>
            <img src={item.url_sq} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              actionIcon={
                <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
    )
}

export default Image;