import React from 'react'
import { useState } from 'react'
import './PlayerControl.css'

function PlayerControl() {
    const [play, setPlay] = useState(true);
    const [volume, setVolume] = useState(true)

    const handlePlay = () => setPlay(!play);

    const handleVolume = () => setVolume(!volume);

    return (
        <>
            <div className='flex-container'>
                <ul className="navbar__player-control__group">
                    <li className="navbar__player-control__item">
                        <button className="icon" type="button" aria-label="Back">
                            <svg viewBox="0 0 16 16" width="16" height="16" focusable="false" role="img" aria-hidden="true" className="sk__sc-1vdzswr-0 jFctkk">
                                <g>
                                    <path d="M15 0v16L2 8.802V16H1V0h1v7.198L15 0z"></path>
                                </g>
                            </svg>
                        </button>
                    </li>
                    <li className="navbar__player-control__item"></li>
                    <li className="navbar__player-control__item">
                        <button className="icon" type="button" aria-label="Play" onClick={handlePlay}>
                            {play ?
                                <svg viewBox="0 0 24 24" width="24" height="24" focusable="false" role="img" aria-hidden="true" className="sk__sc-1vdzswr-0 jFctkk">
                                    <g>
                                        <path d="m5 2 18 10L5 22V2z"></path>
                                    </g>
                                </svg> :
                                <svg viewBox="0 0 24 24" width="24" height="24" focusable="false" role="img" aria-hidden="true" className="sk__sc-1vdzswr-0 jFctkk">
                                    <g>
                                        <path d="M10 2H5v20h5V2zm9 0h-5v20h5V2z"></path>
                                    </g>
                                </svg>}
                        </button>
                    </li>
                    <li className="navbar__player-control__item"></li>
                    <li className="navbar__player-control__item">
                        <button className="icon" type="button" aria-label="Next">
                            <svg viewBox="0 0 16 16" width="16" height="16" focusable="false" role="img" aria-hidden="true" className="sk__sc-1vdzswr-0 jFctkk">
                                <g>
                                    <path d="M1 1v14l11-6.217V15h1V1h-1v6.217L1 1z"></path>
                                </g>
                            </svg>
                        </button>
                    </li>
                    <li className="navbar__player-control__item"></li>
                    <li className="navbar__player-control__item">
                        <button className="icon" type="button" aria-label="Next" onClick={handleVolume}>
                            {volume ?
                                <svg viewBox="0 0 16 16" width="16" height="16" focusable="false" role="img" aria-hidden="true" className="sk__sc-1vdzswr-0 jFctkk">
                                    <g>
                                        <path d="M5.894 9.8H2V6.2h3.894L9 3.301V12.7L5.894 9.8zM1 10.8h4.5L10 15V1L5.5 5.2H1v5.6zm14-3.145a5.117 5.117 0 0 1-1.504 3.63l-.687-.728A4.118 4.118 0 0 0 14 7.655a4.116 4.116 0 0 0-1.013-2.71l.708-.708A5.112 5.112 0 0 1 15 7.655zm-2.094.108c0 .784-.33 1.49-.857 1.99l-.687-.727a1.734 1.734 0 0 0 .036-2.491l.707-.707a2.73 2.73 0 0 1 .801 1.935z"></path>
                                    </g>
                                </svg>
                                :
                                <svg viewBox="0 0 16 16" width="16" height="16" focusable="false" role="img" aria-hidden="true" className="sk__sc-1vdzswr-0 jFctkk">
                                    <g>
                                        <path d="M5.894 9.8H2V6.2h3.894L9 3.301V12.7L5.894 9.8zM1 10.8h4.5L10 15V1L5.5 5.2H1v5.6zm10-4.467L12.667 8 11 9.667l.833.833L13.5 8.833l1.667 1.667.833-.833L14.333 8 16 6.333l-.833-.833L13.5 7.167 11.833 5.5 11 6.333z"></path>
                                    </g>
                                </svg>
                            }
                        </button>
                    </li>
                    <li className="navbar__player-control__item">
                        <input type="range" id='volume' className="volume-bar" min={0} max={100} step={1} />
                    </li>
                </ul>
            </div>
        </>
    )
}

export default PlayerControl