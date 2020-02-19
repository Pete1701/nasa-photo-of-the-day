import React, { useState, useEffect } from "react";
import axios from "axios";
//import ApodCard from "./apodCard";

function Apod() { 
    const [obj, setObj] = useState([]);
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(response => {
            console.log(response.data);
            setObj(response.data);
        })
        .catch(error => {
            console.log('No Data', error);
        });
    }, []);
    return (
        <div>
            <h3>{obj.title}</h3>
            <h5>{obj.date}</h5>            
            <img src={obj.url} alt='Space image'/>
            <p>{obj.explanation}</p>   
        </div>
    );
}

export default Apod;