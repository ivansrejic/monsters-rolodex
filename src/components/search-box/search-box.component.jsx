import React from "react";
import './search-box.styles.css'

//funkcionalna componenta je samo da uzme props i da vrati HTML, ne moze da koristi life cycle metode, i ne moze da korisi state

export const SearchBox = ({placeholder, handleChange}) => (
    <input 
        className = 'search'
        type='search'
        placeholder={placeholder}
        onChange = { handleChange}
    />
);
