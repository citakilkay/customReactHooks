import React, { useEffect, useState } from 'react';

const getSavedValue = (key, initialValue) => {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if(savedValue) return savedValue;
    return initialValue instanceof Function ? initialValue() : initialValue;
};
const updateLocalValue = (key, newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
}
const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue);
    });
    useEffect(() => {updateLocalValue(key, value)}, [value]);
    return [value, setValue];
}

export default useLocalStorage;
