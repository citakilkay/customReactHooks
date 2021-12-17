import React, {useState} from 'react';

// same as UseState
const UseStateHook = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    return [value, setValue];
}

export default UseStateHook;