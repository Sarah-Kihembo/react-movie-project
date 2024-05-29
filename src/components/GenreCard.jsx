import React from "react";
import { Link } from "react-router-dom";


function GenreCard(props){
    return(
        <div className="w-[20%] rounded-lg bg-red-900 text-center">
            <div>
                <img className="w-full rouded-t-lg" src={props.image} alt="card picture" />
            </div>
             <Link to={props.link}><h2 className="text-2xl font-bold text-white p-4">{props.title}</h2></Link>
        </div>
    )
}

export default GenreCard;
