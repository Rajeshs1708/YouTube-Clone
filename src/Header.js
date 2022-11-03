import React, { useState } from 'react'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import './header.css';
import {Link} from 'react-router-dom';

function Header() {

    const [inputSearch,setInputSearch]=useState('');

    return (
        <div className='header'>

            <div className='header__left'>
                <MenuSharpIcon />
             <Link to='/'><img className='header__logo' src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg' alt='' /></Link>
            </div>

            <div className='header__input'>
                <input onChange={e=>setInputSearch(e.target.value)} value={inputSearch} placeholder='Search' type='text' />
                <Link to={`/search/${inputSearch}`}><SearchIcon className='header__inputButton' /></Link>
            </div>

            <div className='header__icons'>
                <VideoCallIcon className='header__icon' />
                <AppsIcon className='header__icon'/>
                <NotificationsIcon className='header__icon'/>
                <Avatar src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80' alt='Profile' />

            </div>
        </div>
    )
}

export default Header
