import React from 'react';

export const ProductItem = ({data}) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{data.id}</h5>
                <p className="card-text">{data.name}</p>
            </div>
        </div>
    )
}
