function MovieCard(props){
    return(
        <>
            {props.data.map(e => {
                return <div class="col-md-4">
                        <img src={e.url} alt="movie image" width="100%"  height="350px"/>
                        <h2>{e.title}</h2>
                        <p>{e.description}</p>
                        <h4>Rating : {e.rating} / 10</h4>
                </div>
            })}
        </>
    )
}

export default MovieCard