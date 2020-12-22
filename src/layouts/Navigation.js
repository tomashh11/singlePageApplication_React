import React from "react";
import {NavLink} from "react-router-dom";
import "../styles/Navigation.css";
import {ROUTES} from '../routes';

const list = [
    {name: "start", path: ".", exact: true},
    {name: "produkty", path: `${ROUTES.products}`},
    {name: "kontakt", path: `${ROUTES.contact}`},
    {name: "panel admina", path: `${ROUTES.admin}`}
];

const Navigation = () => {
    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ));

    return (
            <nav className="main">
                <ul>
                    {menu}
                </ul>
            </nav>
    )
};

export default Navigation;