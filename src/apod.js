import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardImg, CardText, CardTitle, CardSubtitle } from "reactstrap";

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
            <Card>
                <CardTitle>{obj.title}</CardTitle>
                <CardSubtitle>{obj.date}</CardSubtitle>            
                <CardImg src={obj.url} alt='Space image'/>
                <CardText>{obj.explanation}</CardText>
            </Card>  
        </div>
    );
}

export default Apod;