import '../App.css'
import React from 'react';
import airbnb1 from "../Images/airbnb1.png";
import airbnb2 from "../Images/airbnb2.png";
import airbnb3 from "../Images/airbnb3.png";
import airbnb4 from "../Images/airbnb4.png";

const Challenge2 = () => {
    return (
        <div>
            <Airbnb 
                img = {airbnb1}
                text = "Entire homes"
            />
            <Airbnb 
                img = {airbnb2}
                text = "Unique stays"
            />
            <Airbnb 
                img = {airbnb3}
                text = "Cabins and cottages"
            />
            <Airbnb 
                img = {airbnb4}
                text = "Pets allowed"
            />
        </div>
    )
}

const Airbnb = (props) => {
    return (
        <div class = "airbnb">
            <Images img={props.img}/>
            <p>{props.text}</p>
        </div>
    )
}

const Images = (img) => {
    return ( 
        <div>
            <img src={img.img} alt="" width= "101%"/>
        </div>
    );
}

export default Challenge2