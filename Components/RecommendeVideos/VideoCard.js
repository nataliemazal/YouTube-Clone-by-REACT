
//import { Link } from "react-router-dom";
import "./VideoCardCss.css"
import Avatar from '@material-ui/core/Avatar';


export default function VideoCard(props) {
    let views = parseFloat(props.views).toLocaleString('en')
    return (
        // <Link to={`/products/details/${props..id}`}>
        <div className='videocard'>
            <img className='videocard__image' src={props.image} alt='' />
            <div className="videocard__info">
                <Avatar
                    className='videocard__avatar'
                    alt={props.channel}
                    src={props.channelImage}
                />
                <div className="videocard__text">
                    <h4>{props.title}</h4>
                    <p>{props.channel}</p>
                    <p> views • {views} {props.timestamp}</p>
                </div>
            </div>
        </div>
        // </Link>
    );
}


