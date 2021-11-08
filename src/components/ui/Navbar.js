import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

export const Navbar = () => {

    const { totalQuantity } = useSelector( state => state.shoppingCar.cart );

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -6,
            top: 2,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 2px',
        },
    }));
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                ShoppingCarAPP
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/products"
                    >
                        Products
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/car"
                    >

                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={totalQuantity} color="primary">
                            <ShoppingCartIcon color="primary"/>
                        </StyledBadge>
                    </IconButton>
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}