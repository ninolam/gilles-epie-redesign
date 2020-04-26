import React, { useState, useEffect } from 'react';
import ListCard from '../../molecules/ListCard/ListCard'
import axios from 'axios'

const PageList = ({ title, path, currentItem, isShowMore }) => {
    const [list, setList] = useState([])

    useEffect(() => {  
        axios.get(`http://localhost:27017/api/${path}`)
            .then(res => {
                currentItem ? setList(res.data.filter(listCard => listCard._id !== currentItem)) : setList(res.data)
            }) 
    }, [path, currentItem]);

    return (
        <main className={isShowMore ? "page-list" : "page-list mt-content"}>
            <div className="page-list__container">
                <h1 className="main-title">{title}</h1>
                {list.map(item => <ListCard key={item._id} item={item} path={path} />)}
            </div>
        </main>
    )
}

export default PageList;
