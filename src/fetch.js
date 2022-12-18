import React, { useState, useEffect } from 'react';
import "./assets/database/kasa.json"

function GetData() {
    const [data, setData] = useState([]);
    const url = "./assets/database/kasa.json"
    const getData = () => {
        fetch(url)
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setData(myJson)
            });
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="App">
            {
                data && data.length > 0 && data.map((item) => <p>{item.about}</p>)
            }
        </div>
    );
}

export default GetData