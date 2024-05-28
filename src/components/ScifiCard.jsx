import React from "react";
import { Link } from "react-router-dom";


function ScifiCard(props){
    return(
        <div className="w-[20%] rounded-lg bg-red-900 text-center">
            <div>
                <img className="w-full rouded-t-lg" src={props.image} alt="card picture" />
            </div>
             <Link to={props.link}><h2 className="text-xl font-bold text-white p-4">{props.scifi}</h2></Link>
        </div>
    )
}

export default ScifiCard;
