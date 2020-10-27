import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Product from './Components/Product'


export default function RouterConfig() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route  path="/Product">
                    <Product />
                </Route>
            </Switch>
        </Router>
    )
}
