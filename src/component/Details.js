import React,{Component} from 'react';
import{Link} from "react-router-dom";
import {ProductConsumer} from '../Context';
import {ButttonCntainer}from './Navstyle.js';
class Details extends Component{
    render(){
        return(
           <ProductConsumer>
               {value=>{
                   const {id,title,img,price,company,info,inCart}=value.obj.detailProduct;
                   return(
                       <div className="contianer py-5">
                           {/*titel*/}
                           <div className="row">
                               <div className="col-10 mx-auto col-md-6 my-3 ">
                                 <img  src={img} className="img-fluid" alt="product"/>
                               </div>
                               <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                   <h2>model:{title}</h2>
                                   <h4 className="Text-titlel text-uppercase text-muted mt-3 mb-2">
                                       made by:<span className="text-uppercase">{company}</span>
                                   </h4>
                                   <h4 className="text-blue">
                                       <strong>
                                           price<span>$</span>
                                           {price}
                                       </strong>

                                   </h4>
                                   <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                     some info about product:
                                   </p>
                                   <p className="text-muted lead">
                                      {info}
                                   </p>
                                   {/*button*/}
                                   <div>
                                       <Link to="/">
                                           <ButttonCntainer>
                                               Back to products
                                           </ButttonCntainer>
                                       </Link>
                                       <ButttonCntainer cart
                                       disabled={inCart?true:false}
                                       onClick={()=>{
                                           value.addToCart(id);
                                           value.openmodel(id);
                                       }}  >
                                               {inCart?"in cart":"add to cart"}
                                           </ButttonCntainer>
                                   </div>
                                   
                               </div>
                           </div>
                       </div>
                   )
               }}
           </ProductConsumer>
        )
    }
   
}
export default Details;