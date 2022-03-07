import React from 'react';
import './PlayerTrack.css';

function PlayerTrack() {
    return (
        <>
            <div className='track-image'>
                <p>here comes an image</p>
            </div>
            <div className='track-details'>
                <div className='track-info'>
                    <p>Genre</p>
                    <p>title - Band Name</p>
                </div>
                <div className='track-slider'>
                    <button >
                        <svg viewBox="0 0 16 16" width="16" height="16" focusable="false" role="img" aria-hidden="true" className="sk__sc-1vdzswr-0 hyAbfI">
                            <g>
                                <path d="m16 5-4-3v2h-2v1h6zm-12.553.007c.377-.015 1.169-.044 1.935.231.434.156.83.403 1.12.787.285.38.498.938.498 1.774 0 1.009.248 1.805.673 2.422.423.614.996 1.013 1.59 1.272.976.426 2.054.492 2.737.502V14l4-3h-2v-.003h-1.647c-.627 0-1.74-.005-2.69-.42-.465-.203-.873-.497-1.167-.924C8.204 9.23 8 8.64 8 7.8c0-1.014-.262-1.793-.7-2.375-.435-.579-1.013-.923-1.58-1.127-.982-.353-2.02-.304-2.34-.29-.04.003-.07.004-.086.004H0v1h3.294l.153-.004zM5 12H0v-1h5v1z">
                                </path>
                            </g>
                        </svg>
                    </button>
                    <input type="range" className="slider-bar" />
                    <button>
                        <svg viewBox="0 0 16 16" width="16" height="16" focusable="false" role="img" aria-hidden="true" className="sk__sc-1vdzswr-0 hyAbfI">
                            <g>
                                <path d="M9 5H4a3 3 0 0 0 0 6h1.2v1H4a4 4 0 0 1 0-8h1V2l4 3zm3 6a3 3 0 0 0 0-6h-1.2V4H12a4 4 0 0 1 0 8h-1v2l-4-3h5z">
                                </path>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
            <div className='album-tracks'>
                <button>
                    <img src="https://www.svgrepo.com/show/280741/listing.svg" intrinsicsize="512 x 512" srcSet="https://www.svgrepo.com/show/280741/listing.svg 4x" alt="Listing SVG Vector" title="Listing SVG Vector" width="16" height="16" />
                </button>
            </div>
        </>
    )
}

export default PlayerTrack