import React, { useEffect, useState } from 'react';
import './SideNav.css';
import { getAll } from '../../../Service/favorite';

function SideNav() {
    const a = 1
    const [favorites, setFavorites] = useState([]);
    useEffect(() => {
        getAllFavorites();
        return true
    }, [a]);

    function getAllFavorites() {
        let resp = getAll()
        //resp = Object.keys(resp[0])
        setFavorites(favorites => ({
            ...resp
        }))
    }
    return (
        <div className="sidenav">
            <>
                {
                    Object.keys(favorites).map((keyName, i) => (
                        <div className="favorite-item">
                            <div className="favorite-item__media">
                                <img src={favorites[keyName].image} alt="description of linking parck" />
                            </div>
                            <div className="favorite-item__content">
                                <label>{favorites[keyName].title}</label>
                                <br></br>
                                <label>{favorites[keyName].artist}</label>
                            </div>
                        </div>
                    ))
                }
            </>
        </div>
    )
}

export default SideNav