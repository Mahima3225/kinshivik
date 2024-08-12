import React from 'react';
import { useEffect, useState } from 'react';

export default function Experimental({props}) {


    const [data, setData] = useState(null);

    useEffect(() => {
    fetch('http://localhost:3030/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
    }, []);

    return(
        <>

        <div>Editmodal</div>
        <div>{props.name}</div>

        <div>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
        </div>
        </>
    );


}    