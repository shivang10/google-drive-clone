import React from 'react';
import "../../styles/Header.css"
import GDriveLogo from "../../media/google-drive-logo-0-1.png";
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AppsIcon from '@material-ui/icons/Apps';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';


const index = ({userPhoto}) => {
    return (
        <div className="header">
            <div className="header__logo">
                <img className="header__logo__size" src={GDriveLogo} alt=""/>
                <span>Drive</span>
            </div>
            <div className="header__searchContainer">
                <div className="header__searchBar">
                    <SearchIcon/>
                    <input type="text" placeholder="Search in Drive"/>
                    <ExpandMoreIcon/>
                </div>
            </div>
            <div className="header__icons">
                <span>
                    <HelpOutlineIcon/>
                    <SettingsIcon/>
                </span>
                <AppsIcon/>
                <img src={userPhoto} alt="User"/>
            </div>
        </div>
    )
}

export default index
