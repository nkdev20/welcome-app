import React, {useState} from 'react';


const Input  = (props) => {
    const [name, setName] = useState('');
    return (   
        <>
            <input  value={name} onChange={ evt => setName(evt.target.value) }></input>
            <button onClick={() => props.handleClick(name)}>Submit</button>
        </>
    )
};


export default Input;