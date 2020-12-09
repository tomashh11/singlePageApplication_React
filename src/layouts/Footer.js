import React from "react";
import {Route} from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <>
            <h4>Stopka</h4>
            <hr style={{color: "white"}}/>
            <Route path="/" exact render={() => {
                return (
                    <div className="mainPage">
                        <p>Jesteś na - <span> stronie głównej</span></p>
                    </div>
                )
            }}/>

            <Route path="/:page" render={(props) => {
                return (
                    <div className="pages">
                        <p>Jesteś na stronie - <span>{props.match.params.page}</span></p><p className="line"> / </p>
                        <p>adres url - <span>{props.match.url}</span></p><p className="line"> / </p>
                        <p>ścieżka - <span>{props.match.path}</span></p>
                    </div>
                )
            }}/>

            <Route path="/:page/:idProduct" exact render={(props) => {
                return (
                    <div className="pagesProducts">
                        <p>Jesteś na produkcie - <span>{props.match.params.idProduct}</span></p><p className="line"> / </p>
                        <p>adres url - <span>{props.match.url}</span></p><p className="line"> / </p>
                        <p>ścieżka - <span>{props.match.path}</span></p>
                    </div>
                )
            }}/>
        </>
    )
};

export default Footer;