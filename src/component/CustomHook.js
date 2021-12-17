import React, {useState} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const CustomHook = () => {
    const [name, setName] = useLocalStorage('name', 'defaultName');
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        </div>
    )
}
export default CustomHook;