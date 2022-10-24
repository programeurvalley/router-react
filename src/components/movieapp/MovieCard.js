import {Link} from 'react-router-dom'

function MovieCard(props){
    return(
        <>
            {props.data.map(e => {
                return <div class="col-md-4" >
                            <Link to={`/details${e.id}`} style={{display:"inline-block",textDecoration:"none"}} >
                            <img src={e.url} alt="movie image" width="100%"  height="350px"/>
                            <h2>{e.title}</h2>
                            <p>{e.description}</p>
                            <h4>Rating : {e.rating} / 10</h4>
                            </Link>
                    </div>
                
            })}
            
        </>
    )
}

export default MovieCard