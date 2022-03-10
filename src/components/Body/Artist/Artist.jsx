import React, { useEffect, useState } from 'react'
import './Artist.css'

function Artist() {
    const a = 1
    const artistId = this.props.match.id;
    const [information, setInformation] = useState([]);

    useEffect(() => {
        getArtist();
        return true
    }, [a]);

    function getArtist() {
        const data = fetch(`https://deezerdevs-deezer.p.rapidapi.com/artist/${artistId}`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "85ce0aab6emsh64c0a43e9fb99e7p16adcajsn759a625289a0"
            }
        });
        const music = data.json([]);
        setInformation([]);
        setInformation(information => ({
            ...music
        }))
    }

    return (
        <>
            <div className="artist">
                <div className="artist__header">
                    <div className="artist__header__image">
                        <img src="https://e-cdns-images.dzcdn.net/images/artist/4eb6517a096da2ccd8768f1513593cb8/250x250-000000-80-0-0.jpg" alt="album image" />
                    </div>
                    <div className="artist__header__info">
                        <div className="info__name">
                            <h1>Artist Name</h1>
                        </div>
                        <div className="info__fans">
                            <label>243.364 fans</label>
                        </div>
                        <div className="info__albums">
                            <label>54 Albums</label>
                        </div>
                    </div>
                </div>
                <div className="artist__biography">
                    <div className="biography__title">
                        <h3>Biography</h3>
                    </div>
                    <div className="biography__content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ducimus cumque laudantium numquam reiciendis aut commodi sapiente dolorem vel accusantium, accusamus similique totam omnis at veniam qui eius sequi sunt.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Artist