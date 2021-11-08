import React from 'react';

import {
    Switch,
    Route, 
    Redirect
  } from 'react-router-dom';

import { CartScreen } from '../components/car/CartScreen';
import { ProductsScreen } from '../components/products/ProductsScreen';
import { Navbar } from '../components/ui/Navbar';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            
            <div className="container mt-3">
                <Switch> 
                    <Route exact path="/products" component={ ProductsScreen } />
                                
                    <Route exact path="/car" component={ CartScreen } />

                    <Redirect to="/products" />
                </Switch>
            </div>
        </>
    )
}
