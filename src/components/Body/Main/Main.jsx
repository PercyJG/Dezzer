import React from 'react';
import './Main.css'
import { useState, useEffect } from 'react'
import { saveSong } from '../../../Service/favorite';

function Main() {

  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setfilter] = useState('all');
  const [information, setInformation] = useState([]);
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm === '') {
      } else {
        getData();
      }
    }, 1500)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm])

  async function getData() {
    const data = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchTerm}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "85ce0aab6emsh64c0a43e9fb99e7p16adcajsn759a625289a0"
      }
    });
    const music = await data.json([]);
    setInformation([]);
    setInformation(information => ({
      ...music
    }))
  }

  function saveFavorite(song) {

    var favorite = {
      id: song.id,
      title: song.title_short,
      music: song.preview,
      artist: song.artist.name,
      album: song.album.title,
      image: song.album.cover_small
    }
    saveSong(favorite);
  }

  function secTomin(value) {
    value = parseInt(value);
    return Math.floor(value / 60) + ":" + (value % 60 ? value % 60 : '00');
  }

  return (
    <div className="main">
      <div className="main-item">
        <div className="filter-form">
          <input className="topbar-search-input" id="topbar-search" type="search" aria-label="Search" placeholder="Search" onChange={(e) => setSearchTerm(e.target.value)} />
          <select value={filter} onChange={(e) => setfilter(e.target.value)}>
            <option value="all">All</option>
            <option value="album">Album</option>
            <option value="artist">Artist</option>
          </select>
        </div>
      </div>
      {Object.keys(information).length === 0 ? (
        <h1>Search whatever you can imagine</h1>
      ) : (
        <>
          {filter === 'all' ? (
            information.data.map(item => (
              <div className="main-item">
                <div className="main-item__artist">
                  <label>{item.artist.name}</label>
                </div>
                <div className="main-item__content">
                  <div className="main-item__content--media">
                    <img src={item.album.cover} alt="album image" />
                  </div>
                  <div className="main-item__content--info">
                    <div className="info__item flex-end">
                      <div className="info__favorite">
                        <button type="button" onClick={() => saveFavorite(item)} className="icon">
                          <svg className="icon__fav" focusable="false" height="12" role="img" width="12" viewBox="0 0 12 12" aria-hidden="true">
                            <path d="M6 2.5S5 1 3.25 1C1.667 1 0 2.25 0 4.5c0 3 6 7 6 7s6-4 6-7C12 2.25 10.334 1 8.75 1 7 1 6 2.5 6 2.5Z">
                            </path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="info__item">
                      <div className="info__item__title">
                        {item.title_short}
                      </div>
                      <div className="info__item__year">
                        {item.rank}
                      </div>
                    </div>
                    <div className="info__item">
                      <div className="info__item__genre">
                        {item.album.titleca}
                      </div>
                      <div className="info__item__time">
                        {secTomin(item.duration)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            filter === 'album' ? (
              information.data.map(item => (
                searchTerm == item.artist.name ? (
                  <div className="main-item">
                    <div className="main-item__artist">
                      <label>{item.artist.name}</label>
                    </div>
                    <div className="main-item__content">
                      <div className="main-item__content--media">
                        <img src={item.album.cover} alt="album image" />
                      </div>
                      <div className="main-item__content--info">
                        <div className="info__item">
                          <div className="info__item__title">
                            {item.album.title}
                          </div>
                          <div className="info__item__year">
                            released date
                          </div>
                        </div>
                        <div className="info__item">
                          <div className="info__item__genre">
                            HIP HOP
                          </div>
                          <div className="info__item__time">
                            number of albums
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) :
                  (
                    <p></p>
                  )
              ))
            ) : (
              filter === 'artist' ? (
                information.data.map(item => (
                  searchTerm === item.artist.name ? (
                    information.data.map(item => (
                      <div className="main-item">
                        <div className="main-item__artist">
                          <label>{item.artist.name}</label>
                        </div>
                        <div className="main-item__content">
                          <div className="main-item__content--media">
                            <img src={item.album.cover} alt="album image" />
                          </div>
                          <div className="main-item__content--info">
                            <div className="info__item flex-end">
                              <div className="info__favorite">
                                <button type="button" onClick={() => saveFavorite(item)} className="icon">
                                  <svg className="icon__fav" focusable="false" height="12" role="img" width="12" viewBox="0 0 12 12" aria-hidden="true">
                                    <path d="M6 2.5S5 1 3.25 1C1.667 1 0 2.25 0 4.5c0 3 6 7 6 7s6-4 6-7C12 2.25 10.334 1 8.75 1 7 1 6 2.5 6 2.5Z">
                                    </path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <div className="info__item">
                              <div className="info__item__title">
                                {item.title_short}
                              </div>
                              <div className="info__item__year">
                                {item.rank}
                              </div>
                            </div>
                            <div className="info__item">
                              <div className="info__item__genre">
                                {item.album.titleca}
                              </div>
                              <div className="info__item__time">
                                {secTomin(item.duration)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p></p>
                  )
                ))
              ) : (
                <p></p>
              )
            )
          )}
        </>
      )
      }
    </div>
  )
}

export default Main