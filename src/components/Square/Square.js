import { useState } from 'react';
import './square.css'

function Square() {
    const [value, setValue] = useState('\u00A0');

    const handleClick = () => {
        setValue('X');
    };

    return (
        <button className="square" onClick={handleClick}>{value}</button>
    );
}

export default Square;