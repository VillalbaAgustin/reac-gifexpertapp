// Creamos el componente GifExpertApp con el comando 'rafcp'

import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = (props) => {

    const [categories, setCategories] = useState(['Hola!']);

    // const handleAdd = () =>{
        
    //     setCategories([...categories, 'Naruto'])   //toma lo que tenia categories y agrega al final Naruto
    //                                                //('Naruto', ...categories)Agrega Naruto adelante
    // }

    return (
        <div className='container'>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map((category) => 
                        <GifGrid 
                        key={ category }
                        category={ category }/>
                    )
                }
            </ol>
            

        </div>
    );
};

export default GifExpertApp;
