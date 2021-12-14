import '../App.css'
import React from 'react';
import netflix1 from "../Images/netflix1.png";
import netflix2 from "../Images/netflix2.png";
import netflix3 from "../Images/netflix3.png";
import netflix4 from "../Images/netflix4.png";
import netflix5 from "../Images/netflix5.png";

const Challenge3 = () => {
    return (
        <div>
            <Netflix 
                img = {netflix1}
            />
            <Netflix 
                img = {netflix2}
            />
            <Netflix 
                img = {netflix3}
            />
            <Netflix 
                img = {netflix4}
            />
            <Netflix 
                img = {netflix5}
            />
        </div>
    )
}

const Netflix = (props) => {
    return (
        <div class = "netflix">
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

export default Challenge3