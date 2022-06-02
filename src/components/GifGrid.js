import React from 'react';
import { useFetchGif } from '../hooks/useFetchGifts';
import { GifGridItem } from './GifGridItem';
import { Loading } from './Loading';

export const GifGrid = ({ category }) => {


    const {data:images, loading} = useFetchGif(category);

    



    return (
        <>
        <h3 className='animate__animated animate__bounceIn'>{category}</h3>

        {loading && <Loading />}
        
        <div className='card-grid'>
            
                {
                    images.map (( img )=>(
                        <GifGridItem 
                        key={img.id}
                        {...img}               //img={img}
                        />
                    ))
                }
                
            
        </div>
        </>
        
    );
};
