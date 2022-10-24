import { useState } from "react"
import MovieCard from "./MovieCard";

function Filter(){
    const [filter , setFilter] = useState('');

    const search = (event) => {
        setFilter(event.target.value);
    }

    const [movie , setMovielist] = useState(
        [{
            id : 0,
            title : "The Dark Knigh",
            description : "Set within a year after the events of Batman Begins (2005), Batman, Lieutenant James Gordon, and new District Attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City, until a mysterious and sadistic criminal mastermind known only as 'The Joker' appears in Gotham, creating a new wave of chaos. Batman's struggle against The Joker becomes deeply personal, forcing him to 'confront everything he believes' and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent, and Rachel Dawes.",
            url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiotskdRwsqkA50EJ3tvLwgVyag1O27eYXRuEXOrFEcLyDXb9e' ,
            rating :"9",
            trailer:"https://www.youtube.com/embed/EXeTwQWrcwY"
        },{
            id : 1,
            title : "Godfather",
            description : "It is the first installment in The Godfather trilogy. The story, spanning from 1945 to 1955, chronicles the Corleone family under patriarch Vito Corleone (Brando), focusing on the transformation of his youngest son, Michael Corleone (Pacino), from reluctant family outsider to ruthless mafia boss.",
            url : 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            rating : "9.2",
            trailer:"https://www.youtube.com/embed/UaVTIH8mujA"

        },{
            id:2,
            title : "Avengers Infinity War",
            description : "Facing an enemy too powerful to stop alone, the Avengers and the Guardians, alongside Doctor Strange, Black Panther, and Spider-Man must come together and stop Thanos from inflicting his power and destroying the universe.",
            url : 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg',
            rating : "8.4",
            trailer: "https://www.youtube.com/embed/6ZfuNTqbHE8"
        },{
            id:3,
            title: "Fast and Furious 7",
            description : "Synopsis. Après avoir vaincu Owen Shaw (Luke Evans) et sa bande, et avoir obtenu l'amnistie, Dominic Toretto (Vin Diesel), Brian O'Conner (Paul Walker) et leurs amis sont de retour aux États-Unis pour mener à nouveau une vie de famille tranquille.",
            url : 'https://www.abusdecine.com/wp-content/uploads/films/fast-and-furious-7-affiche.jpg',
            rating : "7.1",
            trailer:"https://www.youtube.com/embed/Skpu5HaVkOc"
        }]
    )

    let data = movie.filter((title , rating) =>  {
        return Object.keys({title, rating}).some(key => 
                title[key].toString().includes(filter.toString())
            )
    })

    const [inputdata , setInputdata] = useState({
        title:"",
        description : "",
        url: "",
        rating: "",
        trailer : ""
    })

    function EntreDataToObject(e){
        setInputdata({...inputdata,[e.target.name]:e.target.value})
    }

    let {title,description,url,rating,trailer} = inputdata

    function EntreObjectToArray(){
        (inputdata.title === "" || inputdata.description === "" || inputdata.url === "" || inputdata.rating === "" || inputdata.trailer === "") ? alert("All the field must be full") :
        setMovielist([...movie,{title,description,url,rating,trailer}])
        setInputdata({title:"",description:"",url:"",rating:"",trailer:""})
    }

    /*

        ### For testing we can use : 

            title : 300: Rise of an Empire
            description : Greek general Themistocles of Athens leads the naval charge against invading Persian forces led by mortal-turned-god Xerxes and Artemisia, vengeful commander of the Persian navy.
            url : https://m.media-amazon.com/images/M/MV5BMTEwNTU2MjAwMDdeQTJeQWpwZ15BbWU3MDk2Njc2Njk@._V1_.jpg
            rating : 6.2
            trailer : http://www.youtube.com/embed/2zqy21Z29ps

    */

    

    return(
        <>
        <input 
            placeholder='Search :  using title or rate' 
            id="inp-search" 
            value={filter}
            onChange={search.bind(this)}
        /><button id="btn-search" >Search</button>
        <div class="row" >
            <MovieCard data={data}  />
        </div>
        <div class="row">
            <h1 style={{color:"white"}}>Add New Movie :</h1>
            <hr style={{color:"white",border:"3px solid white", borderRadius:"5px"}} />
            <label>Title :</label>
            <input 
                type="text"
                placeholder="Entre the Title of the movie"
                name="title"
                value={inputdata.title}
                onChange={EntreDataToObject}
            />
            <label>Description :</label>
            <input 
                type="text" 
                placeholder="Entre the Description of the movie"
                name="description"
                value={inputdata.description}
                onChange={EntreDataToObject}
            />
            <label>posterURL :</label>
            <input 
                type="text" 
                placeholder="Entre the posterURL for the image that we used in the movie"
                name="url"
                value={inputdata.url}
                onChange={EntreDataToObject}
            />
            <label>Rating :</label>
            <input 
                type="text" 
                placeholder="Entre the Rating of the movie"
                name="rating"
                value={inputdata.rating}
                onChange={EntreDataToObject}
            /><br/>
            <label>Trailer :</label>
            <input 
                type="text" 
                placeholder="Entre the Rating of the movie"
                name="trailer"
                value={inputdata.trailer}
                onChange={EntreDataToObject}
            /><br/>
            <button id="btn-submit" onClick={EntreObjectToArray} >Submit</button>
        </div>
        </>
        
    )
}

export default Filter