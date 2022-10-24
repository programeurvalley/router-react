import {Link} from 'react-router-dom'
import { movielist } from './data';

function Details(props){
    console.log(props.match.params.id)

    let id = props.match.params.id;

    console.log(movielist[id])

    return(
    <>
    <div id="detailsmovie" >
        <Link to="/" style={{textDecoration:"none",color:"gray"}}>/Home</Link><lable class="label-title">{movielist[id].title}</lable>
        <hr style={{color:"white"}} />
        <div class="col-md-6" style={{border:"3px solid white",borderRadius:"15px",padding:"10px",margin:"5px",marginLeft:"25%"}} >
                            <iframe id="ytplayer" type="text/html" width="100%" height="360"
                                src={movielist[id].trailer}
                                frameborder="0"/>
                            <p>{movielist[id].description}</p>
                    </div>
    </div>
        
    </>
        

    )
}

export default Details