import { useState } from "react";

const MapMethod = () => {

    const [christmasMovies, ssetChristmasMovies] = useState ([
        {movie: "point break", date: "1991"},
        {movie: "fellowship of the ring", date: "2001"},
        {movie: "potter", date: "2001"},
        {movie: "die hard", date: "1989"}
    ])
    return (
        <div>
            <h1>Map method - Movies</h1>
            {christmasMovies.map((film, index) => {
                return <Card key = {index} name = {film.movie} date = {film.date}/>
            })}
        </div>
    )
}

const Card = (props) => {
    return (
    <div>
        <h2>Movie: {props.name}</h2>
        <p>Release date: {props.date}</p>
    </div>
    )
}

export default MapMethod;