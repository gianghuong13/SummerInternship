import { useState, useEffect } from 'react'

function Buoi1Ping () {

    const[pingResponse, setPingResponse] = useState('');

    useEffect(() => {
        fetch('http://localhost:1337/api/ping')
        .then((res) => res.json())
        .then((data) => setPingResponse(data.message))
        .catch((error) => console.error('Error fetching ping:', error));
    }, [])
    
    return (
        <>
            <h1>welcome to CMS</h1>

            <div>
                API ping response: {pingResponse}
            </div>
        </>
    );
}

export default Buoi1Ping;