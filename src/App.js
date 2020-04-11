import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import ProductList from './component/ProductList';
import Details from './component/Details';
import Defuale from './component/Defualt';
import Cart from './component/Cart';
import Model from './component/model'
function App() {
  return (
  <React.Fragment>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={ProductList}/>
      <Route path="/details" component={Details}/>
      <Route path="/cart" component={Cart}/>
      <Route  component={Defuale}/>
    </Switch>
    <Model/>
  </React.Fragment>
  );
}

export default App;
