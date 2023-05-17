import './field.sass';
// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line react/prop-types
function Field ({text, id}) {
    return (
    <div className='field'>
        <p className='field__p'>
            {text}
        </p>
        <input id={id} className='field__input field-yellow'/>
    </div>
    );
}

export default Field