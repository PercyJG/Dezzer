import React from 'react'
import './Navbar.css'
import Logo from './Logo/Logo';
import PlayerControl from './PlayerControl/PlayerControl';
import PlayerSearch from './PlayerSearch/PlayerSearch';
import PlayerTrack from './PlayerTrack/PlayerTrack';
import TopMenu from '../TopMenu/TopMenu';


function Navbar() {

    return (
        <>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <nav className='navbar'>
                <div className='navbar__logo'>
                    <Logo></Logo>
                </div>
                <div className='navbar__player-control'>
                    <PlayerControl></PlayerControl>
                </div>
                <div className='navbar__player-track'>
                    <PlayerTrack></PlayerTrack>
                </div>
                <div className='navbar__player-search'>
                    <PlayerSearch></PlayerSearch>
                </div>
            </nav>
            <TopMenu></TopMenu>
        </>
    )
}

export default Navbar