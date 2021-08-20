
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { Avatar } from '@material-ui/core'
import './Header.css'


function Header() {

    const [inputSearch, setInputSearch] = useState('');
    return (
        <div className='header'>

            <div className='header_left'>
                <Avatar className='header_icon' style={{ height: '25px', width: '25px' }}
                    alt=''
                    src='https://yt3.ggpht.com/yti/APfAmoF0OBTtJEZmrhUUTMNWT7VRnu-pccN6mZULfw=s88-c-k-c0x00ffffff-no-rj-mo'
                />
                <VideoCallIcon className='header_icon' />
                <AppsIcon className='header_icon' />
                <NotificationsIcon className='header_icon' />
            </div>
            <div className="header__center">
                <input type='text' onChange={(e) => setInputSearch(e.target.value)} value={inputSearch} />
                <Link to={`/search/${inputSearch}`} >
                    <SearchIcon className='header__searchbutton' />
                </Link>
            </div>
            <div className='header_right'>
                <Link to='/'>
                    <div className="header__logo">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="YouTube Logo" width={100
                        } />
                        <MenuIcon />
                    </div>
                </Link>
            </div>




        </div>
    )
}

export default Header