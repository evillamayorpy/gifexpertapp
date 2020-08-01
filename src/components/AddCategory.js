import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            setCategories( cats => {
                const exists = cats.find( cat => cat === inputValue);
                if (exists) {
                    alert('Ya existe ese elemento');
                    return cats;
                }
                return [ inputValue, ...cats];
            });
            setInputValue('');
        }

    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
            {
                (inputValue.length > 0 && inputValue.length < 3) &&
                <span style={{color: 'red'}}>Debe ingresar al menos 3 caracteres</span>
            }
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;