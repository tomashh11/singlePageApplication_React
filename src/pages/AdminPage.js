import React from "react";
import {Route, Redirect} from "react-router-dom";

const permission = false;

const AdminPage = () => {
    return (
        <Route render={() => (
            permission ? <h4 style={{fontSize: "20px"}}>Panel admina - dzień dobry</h4> : <Redirect to="/login"/>
        )}/>
    )
};

export default AdminPage;