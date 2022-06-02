import React, { useState } from 'react';
import PropTypes from "prop-types";

const words = ['Naruto','One Direction','Goku','One Piece','Sasuke','Teta','Culo','Pito','Piton','Pene','Hola','Ola','Rick and Morty','Spiderman',''];

export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('');
    const [matchWords, setMatchWords] = useState([]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        // console.log(typeof e.target.value);

        
        
        const match = words.filter(word => word.toLowerCase().includes(e.target.value));
        console.log(match);
        (e.target.value === '') ? setMatchWords([]) : setMatchWords(match);

        // console.log(matchWords);

    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (inputValue.trim().length > 2 ) {
            setCategories(cate =>[ inputValue,...cate])   //setCategories( (cate) => { return [ inputValue, ...cate ] })
            setInputValue('');
        }

        console.log('Submit Hecho');
        
        
    };
    
    
    const handleAutoComplete = (e,word) =>{
        setInputValue(word);
        console.log(inputValue);
        // handleSubmit(e);
        setCategories(cate =>[ word,...cate])
        
        
    }


    
    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder='NombreCategoria'
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
            <ul  className='autocompletado'>
                {
                    matchWords.map(word => 

                <li key={word} className='autocompletado-li' onClick={e => handleAutoComplete (e,word)} /* onKeyDown={handleKeyDown} */>{word}</li>

                )}
            </ul>
        </form>
    );
};


AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired
};