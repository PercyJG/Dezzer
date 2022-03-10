import React from 'react'
//import axios from 'axios'
import { useState, useEffect } from 'react'

function PlayerSearch() {

    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if(searchTerm === ''){
                console.log("Empty string");
            }else{
                getData();
            }
        }, 2000)

        return () => clearTimeout(delayDebounceFn)
    }, [searchTerm])

    async function getData(){
        const data = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchTerm}`, {
            method: "GET",
            headers: {
              "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
              "x-rapidapi-key": "85ce0aab6emsh64c0a43e9fb99e7p16adcajsn759a625289a0"
            }
          });
          const music = await data.json(["data"]);
          console.log(music.data);
    }

    return (
        <>
            <form className="topbar-search-form topbar-search-active" autoComplete="off">
                <button className="topbar-search-submit" type="button" aria-labelledby="topbar-search" >
                </button>
                <input className="topbar-search-input" id="topbar-search" type="search" aria-label="Search" placeholder="Search" onChange={(e) => setSearchTerm(e.target.value)} />
                <button className="topbar-search-clear" type="button" aria-hidden="false" aria-label="Clear">
                    <svg viewBox="0 0 16 16" width="16" height="16" focusable="false" role="img" aria-hidden="true" className="sk__sc-1vdzswr-0 jFctkk topbar-search-icon">
                        <g>
                            <path d="m8.002 8.71 6.295 6.294.707-.707L8.71 8.002l6.294-6.295L14.297 1 8.002 7.295 1.707 1 1 1.707l6.295 6.295L1 14.297l.707.707L8.002 8.71z"></path>
                        </g>
                    </svg>
                </button>
            </form>
        </>
    )
}

export default PlayerSearch