import React,{Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Context';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

class BlogBage extends Component{
 
    render(){
      
        const{title,img,info}=this.props.item;
        return(
            <div className="col-12 mx-auto my-3  ">
             
            <ProductConsumer>
                {value=>(
                  
                    <div className="img-container p-5" >
                        
                        <Typography  gutterBottom variant="h5" component="h2">
                           {title}
                            </Typography>
                            <img src={img}    alt ="product" className="img-style" />

                            <Typography  variant="body1" color="textSecondary" component="p">
                                 {info}
                                 </Typography>
                        </div>
                         
              
           

                )
             
                   
                }
               </ProductConsumer>
                        
                
            </div>
           
        )
    }
   
}
export default BlogBage;
