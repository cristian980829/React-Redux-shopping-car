import React from 'react';

import {
    Switch,
    Route, 
    Redirect
  } from 'react-router-dom';

import { CarScreen } from '../components/car/CarScreen';
import { ProductsScreen } from '../components/products/ProductsScreen';
import { Navbar } from '../components/ui/Navbar';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            
            <div className="container mt-3">
                <Switch> 
                    <Route exact path="/products" component={ ProductsScreen } />
                                
                    <Route exact path="/car" component={ CarScreen } />

                    <Redirect to="/products" />
                </Switch>
            </div>
        </>
    )
}
