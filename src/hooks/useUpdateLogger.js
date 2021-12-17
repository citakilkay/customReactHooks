import React, { useEffect } from 'react'

const useUpdateLogger = (value) => {
    useEffect(() => {
        console.log();
    }, [value])
    return (
        <div>
            
        </div>
    )
}

export default useUpdateLogger;
