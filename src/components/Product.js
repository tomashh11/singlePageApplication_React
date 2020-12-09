import React from "react";

const Product = (props) => {
    return (
        <article className="product">
            <h1 style={{fontSize: "16px", textTransform: "uppercase", fontStyle: "italic",
                marginBottom: "10px"}}>{props.id}</h1>
        </article>
    )
};

export default Product;