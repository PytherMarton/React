import '../App.css'
import React from 'react';
import bbc1 from "../Images/bbc1.png";
import bbc2 from "../Images/bbc2.png";
import bbc3 from "../Images/bbc3.png";
import bbc4 from "../Images/bbc4.png";

const Challange1 = () => {
    return (
    <div>
        <Bbc 
            img = {bbc1}
            h2 = "Don't think pandemic is over, Whitty warns" 
            p = "Unlocking too quickly would lead to a substantial surge in infection, UK chief medical adviser says." 
            time = "&#128339; 2h |" 
            topic = "Health"
        />
        <Bbc 
            img = {bbc2}
            h2 = "Pay rise was set to be 2.1% - NHS chief" 
            p = " NHS England boss backs ministers over pay dispute but does not rule out a one off bonus for workers." 
            time = "&#128339; 1h |" 
            topic = "UK Politics"
        />
        <Bbc 
            img = {bbc3}
            h2 = "Charity criticises Morgan's comments about Meghan" 
            p = "Metnal health charity Mind says it is 'dissapinted' by comments Piers Morgan made on Monday." 
            time = "&#128339; 2h |" 
            topic = "Entertainment & Arts"
        />
        <Bbc 
            img = {bbc4}
            h2 = "Unilever drops word 'normal' from beauty products" 
            p = "The owner of Dove and Vaseline will remove the word from about 200 products in a push for inclusivity." 
            time = "&#128339; 10m |" 
            topic = "Business"
        />      
    </div>
    )
}

const Bbc = (props) => {
    return (
      <div className = "bbc">
         <Images img={props.img}/>
         <h5>{props.h2}</h5>
         <p class = "p">{props.p}</p>
         <p class = "timeTopic">{props.time} {props.topic}</p>
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

export default Challange1