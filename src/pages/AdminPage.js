import React from "react";
import {Route, Redirect} from "react-router-dom";
import {ROUTES} from "../routes";

const permission = false;

const AdminPage = () => {
    return (
        <Route render={() => (
            permission ? <h4 style={{fontSize: "20px"}}>Panel admina - dzień dobry</h4> : <Redirect to={`${ROUTES.login}`}/>
        )}/>
    )
};

export default AdminPage;