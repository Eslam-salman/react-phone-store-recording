import React,{Component} from 'react';
class Defuale extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-10 text-center mx-auto text-uppercase pt-5 Text-titlel">
                        <h1>404</h1>
                        <h1>error</h1>
                        <h2>page not found</h2>
                        <h3>the requested url
                        <span className="text-danger">{this.props.location.pathname}</span>
                        {" "} was not found</h3>
                    </div>
                </div>

            </div>
        )
    }
   
}
export default Defuale;