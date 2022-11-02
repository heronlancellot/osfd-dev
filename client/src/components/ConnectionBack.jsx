import React, {useEffect, useState} from 'react'
import './connectionBack.css'

const ConnectionBack = () => {

    const [backendData, setbackendData] = useState([{}]);

    useEffect(() => {
        fetch("/api").then(
            response => response.json()
        ).then(
            data => {
                setbackendData(data)   
            }
        )
    }, []);
    
    return (
        <div className='connection-back'>

            {(typeof backendData.message === 'undefined') ? (
                <p>Loading ... </p>
            ) : (
                backendData.message
            )}
        </div>
    )
}

export default ConnectionBack