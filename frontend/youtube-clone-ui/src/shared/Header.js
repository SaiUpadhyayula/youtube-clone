import React from 'react';
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import CreateVideoButton from "../components/CreateVideoButton.js";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/">Youtube Clone</a>
                <input className="form-control form-control-dark w-100" type="text" placeholder="Search"
                       aria-label="Search"/>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <CreateVideoButton/>
                        <LoginButton/>
                        <LogoutButton/>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;
