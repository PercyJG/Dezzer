import React from 'react'

function PlayerSearch() {
    return (
        <>
            <form className="topbar-search-form topbar-search-active" autoComplete="off">
                <button className="topbar-search-submit" type="submit" aria-labelledby="topbar-search">
                    <svg viewBox="0 0 16 16" width="16" height="16" focusable="false" role="img" aria-hidden="true" className="sk__sc-1vdzswr-0 jFctkk topbar-search-icon">
                        <g>
                            <path d="M13 7.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0zm-1.43 5.07a6.5 6.5 0 1 1 .73-.685l2.054 2.054a.5.5 0 0 1-.708.707L11.57 12.57z"></path>
                        </g>
                    </svg>
                </button>
                <input className="topbar-search-input" id="topbar-search" type="search" aria-label="Search" placeholder="Search" />
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