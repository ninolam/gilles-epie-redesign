import React, { useState, useEffect } from 'react';
import axios from 'axios'
import PageList from '../PageList/PageList'

const PageDetails = ({ computedMatch }) => {

    const [item, setItem] = useState({})

    useEffect(() => {
        axios.get("http://localhost:27017/api/" + computedMatch.params.path + "/" + computedMatch.params.id)
            .then(res => {
                setItem(res.data)
                window.scrollTo(0, 0);
            })
        document.title = item.title
    }, [computedMatch.params.path, computedMatch.params.id, item.title]);


    return (
        <>
            <div className="page-details mt-content">
                <h1>{item.title}</h1>
                <img src={item.picture_url} alt="" />
                {item.ingredients ?
                    <>
                        <h2>Ingrédients <span>(pour {item.number_of_persons} personnes)</span></h2>
                        <ul>
                            {item.ingredients && item.ingredients.map((ingredient, id) => <li key={id}>{ingredient}</li>)}
                        </ul>
                        <h2>Préparation</h2>
                        <ul>
                            {item.preparation && item.preparation.split('\n').map((preparation, id) => <li key={id}>{preparation}</li>)}
                        </ul>
                        {item.dressing &&
                            <>
                                <h2>Dressage</h2>
                                <p>{item.dressing}</p>
                            </>
                        }
                        {item.cooking &&
                            <>
                                <h2>Cuisson</h2>
                                <p>{item.cooking}</p>
                            </>
                        }
                    </>
                    :
                    <>
                        <h2>Description</h2>
                        <ul>
                            {item.content && item.content.split('\n').map((paragraph, id) => <li key={id}>{paragraph}</li>)}
                        </ul>
                    </>
                }
            </div>
            {computedMatch.params.path === "recipes" && <PageList isShowMore currentItem={item._id} path="/recipes" title="Plus de recettes ?" />}
        </>
    )
}

export default PageDetails;
