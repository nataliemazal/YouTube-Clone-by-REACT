import { NavLink } from "react-router-dom";
import "./Menu.css";

import SideBarRow from '../../SideBarRow/SideBarRow';
import '../../SideBar/SideBar.css';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';


export default function Menu() {
    return (
        // <aside>
        //     <nav>
        //         <NavLink to="/" className="nav-item" activeClassName="current">
        //             <SideBarRow selected Icon={HomeIcon} title='Home' />
        //         </NavLink>
        //         <NavLink to="/" className="nav-item">
        //             <SideBarRow Icon={WhatshotIcon} title='Trending' />
        //         </NavLink>
        //         <NavLink to="/about" className="nav-item">
        //             <SideBarRow Icon={SubscriptionsIcon} title='Subscription' />
        //         </NavLink>
        //         <hr />
        //         <NavLink to="/contact-us" className="nav-item">
        //             <SideBarRow Icon={VideoLibraryIcon} title='Library' />
        //         </NavLink>
        //         <NavLink to="/contact-us" className="nav-item">
        //             <SideBarRow Icon={HistoryIcon} title='History' />
        //         </NavLink>
        //         <NavLink to="/contact-us" className="nav-item">
        //             <SideBarRow Icon={OndemandVideoIcon} title='Your videos' />
        //         </NavLink>
        //         <NavLink to="/contact-us" className="nav-item">
        //             <SideBarRow Icon={WatchLaterIcon} title='Watch later' />
        //         </NavLink>

        //         <NavLink to="/contact-us" className="nav-item">
        //             <SideBarRow Icon={ThumbUpIcon} title='Liked vides' />
        //         </NavLink>
        //         <hr />
        //     </nav>
        // </aside>

        <div className='sidebar'>
            <SideBarRow selected Icon={HomeIcon} title='Home' />
            <SideBarRow Icon={WhatshotIcon} title='Trending' />
            <SideBarRow Icon={SubscriptionsIcon} title='Subscription' />
            <hr />
            <SideBarRow Icon={VideoLibraryIcon} title='Library' />
            <SideBarRow Icon={HistoryIcon} title='History' />
            <SideBarRow Icon={OndemandVideoIcon} title='Your videos' />
            <SideBarRow Icon={WatchLaterIcon} title='Watch later' />
            <SideBarRow Icon={ThumbUpIcon} title='Liked vides' />
            <hr />
        </div>
    );
}