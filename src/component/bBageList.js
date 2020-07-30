import React,{Component} from 'react';
import BlogBage from './blogBage';
import Titel from './titel';
import {ProductConsumer} from '../Context';
class bBlogList extends Component{
    
    render(){
        return(
           <React.Fragment>
               <div className="py-5">
                   <div className="container">
                       <Titel name="" titel="Blog"/>
                       <div className="row">
                           <ProductConsumer>
                               {value=>{
                                   console.log(value.obj.Blogs)
                                return value.obj.Blogs.map(items=>{
                                        
                                       return < BlogBage key={items.id} item={items}/>;
                                   });

                               }}
                           </ProductConsumer>

                       </div>
                   </div>
               </div>

           </React.Fragment>
            //
           
        )
    }
   
}
export default bBlogList;