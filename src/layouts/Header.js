import React from "react";
import "../styles/Header.css";

import img1 from "../images/header1.jpg";
import img2 from "../images/header2.jpg";
import img3 from "../images/header3.jpg";
import img4 from "../images/header4.jpg";
import {Route, Switch} from "react-router-dom";

const Header = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact render={() => (
                    <img src={img1} alt="miasto"/>
                )}/>
                <Route path="/products" render={() => (
                    <img src={img2} alt="miasto"/>
                )}/>
                <Route path="/contact" render={() => (
                    <img src={img3} alt="miasto"/>
                )}/>
                <Route path="/admin" render={() => (
                    <img src={img1} alt="miasto"/>
                )}/>
                <Route render={()=>(
                    <img src={img4} alt="miasto" />
                )}/>
            </Switch>
        </>
    )
};

export default Header;