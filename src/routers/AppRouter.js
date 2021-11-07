import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Redirect
  } from 'react-router-dom';

import { CarScreen } from '../components/car/CarScreen';
import { ProductsScreen } from '../components/products/ProductsScreen';

export const AppRouter = () => {
    return (
        <>

            <Router>
                <div>
                    <Switch> 
                        <Route exact path="/products" component={ ProductsScreen } />
                        
                        <Route exact path="/car" component={ CarScreen } />

                        <Route path="/" component={ ProductsScreen } />

                        <Redirect to="/products" />
                    </Switch>
                </div>
            </Router>
        </>
    )
}
