import React from 'react';
import  './navbar/nav_menu.css';

const NavMenu = (props) =>{
    console.log(props.menuOpen);
    return (
        <div className="nav-menu" onClick={props.menuOpen} >
            <div className="nav-menu-icon nav-icon-top"></div>
            <div className="nav-menu-icon nav-icon-mid"></div>
            <div className="nav-menu-icon nav-icon-bot"></div>
        </div>     

    )

}
export default NavMenu;