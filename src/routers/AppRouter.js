import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
    HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {

    const state = useSelector( state => state.shoppingCar );

    useEffect( ()=> {
        localStorage.setItem('shoppingCar', JSON.stringify( state ) );
    }, [state]);

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div>
                <Switch> 
                    
                    <Route path="/" component={ DashboardRoutes } />

                </Switch>
            </div>
        </Router>
    )
}
