import React/* , { useState, useEffect } */ from 'react'
import { useFetchgifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {


    const { data:images, loading } = useFetchgifs( category );

    return (
        <>
            <h3 className="card animate__animated animate__fadeIn"> { category } </h3>

            { loading && <p className="card animate__animated animate__flash">Loading...</p> }

            {<div className="card-grid">
                {
                    images.map( img => 
                            <GifGridItem 
                                key={ img.id }
                                { ...img }
                            />
                    )
                } 
                
            </div>}
        </>
    )
}

export default GifGrid;
