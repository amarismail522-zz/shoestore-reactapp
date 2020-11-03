import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import About from './Components/About'
import Footer from './Components/Footer';
import ProductItem from './Components/ProductItem';


export default function RouterConfig() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact  path="/Product">
                    <Product />
                </Route>
                <Route  path="/About">
                    <About />
                </Route>
                <Route  path="/product/:id">
                    <ProductItem />
                </Route>
                <Route path="*" component={()=> <h1>404 Page Not found</h1>}/>
            </Switch>
            <Footer />
        </Router>
    )
}
