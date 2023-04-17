import React, { useState } from 'react';
import PropTypes from 'prop-types';

const words = [
  '',
  'Hola Mundo',
  'Tiempo',
  'día',
  'Naruto',
  'One Direction',
  'Goku',
  'One Piece',
  'Sasuke',
  'Hola',
  'Ola',
  'Rick and Morty',
  'Spiderman',
  'Marvel',
  'Alesandro Lalli GAY',
  'Lucas Montesino Puto',
  'Puri no viniste a mi FC',
  'Ara I love you',
  'Sale anvurgues',
  'vamo a juga?',
  'chato cagon',
];

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');
  const [matchWords, setMatchWords] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    // console.log(typeof e.target.value);

    const match = words.filter((word) =>
      word.toLowerCase().includes(e.target.value)
    );
    // console.log(match);
    e.target.value === '' ? setMatchWords([]) : setMatchWords(match);

    // console.log(matchWords);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 1) {   //.trim() elimina los espacios en blanco
      setCategories((cate) => [inputValue, ...cate]); //setCategories( (cate) => { return [ inputValue, ...cate ] })
      setInputValue('');
    }

    console.log('Submit Hecho');
  };

  const handleAutoComplete = (e, word) => {
    setInputValue(word);
    console.log(inputValue);
    // handleSubmit(e);
    setCategories((cate) => [word, ...cate]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="NombreCategoria"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <ul className="autocompletado">
        {matchWords.map((word) => (
          <li
            key={word}
            className="autocompletado-li"
            onClick={(e) =>
              handleAutoComplete(e, word)
            } /* onKeyDown={handleKeyDown} */
          >
            {word}
          </li>
        ))}
      </ul>
    </form>
  );
};

AddCategory.prototype = {
  setCategories: PropTypes.func.isRequired,
};
