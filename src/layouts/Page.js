import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import ProductListPage from "../pages/ProductListPage";
import ProductPage from "../pages/ProductPage";
import AdminPage from "../pages/AdminPage";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";

const Page = () => {
    return (
        <>
            <Switch>
                <Route path={`${window.location.pathname}/`} exact component={HomePage}/>
                <Route path={`${window.location.pathname}contact`} component={ContactPage}/>
                <Route path={`${window.location.pathname}products`} component={ProductListPage}/>
                <Route path={`${window.location.pathname}product/:id`} component={ProductPage}/>
                <Route path={`${window.location.pathname}admin`} component={AdminPage}/>
                <Route path={`${window.location.pathname}login`} component={LoginPage}/>
                <Route component={ErrorPage}/>
            </Switch>
        </>
    )
};

export default Page;