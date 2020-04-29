import React from 'react';
import { Link } from "react-router-dom";

const ListCard = ({ item, path }) => {
    const picture = path === "/recipes" ? item.picture_url : item.header_picture
    return (
        <div className="card">
            <div className="card__wrapper">
                <div className="card__text-container">
                    <h2>{item.date}</h2>
                    <h1>{item.title}</h1>
                    <p>{item.preparation ? item.preparation : item.content}</p>
                    <Link to={{
                        pathname: `${path}/${item._id}`,
                        state: { id: item._id, path: path }
                    }}>
                        <button>Lire plus <span>></span></button> 
                    </Link>
                </div>
                <div style={{ backgroundImage: `url(${picture})` }} className="card__image-container" />
            </div>
        </div>
    )
}

export default ListCard;
