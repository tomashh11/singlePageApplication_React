import React from "react";
import {Link} from "react-router-dom";
import Product from "../components/Product";
import { ROUTES } from '../routes';

const ProductPage = ({match}) => {
    return (
        <>
            <div style={{fontSize: "20px", marginBottom: "10px"}}>Strona produktu:</div>
            <Product id={match.params.id}/>
            <Link to={`${ROUTES.products}`}>Powrót do listy produktów</Link>
        </>
    )
};

export default ProductPage;