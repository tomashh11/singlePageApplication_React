import React from "react";

const Article = (props) => {

    return (
        <article>
            <h3 style={{
                fontSize: "20px",
                marginBottom: "3px",
                textTransform: "uppercase"
            }}>{props.title}</h3>
            <span style={{
                fontSize: "12px",
                display: "block",
                marginBottom: "10px",
            }}>{props.author}</span>
            <p style={{
                fontSize: "14px"
            }}>{props.text}</p>
        </article>
    )
};

export default Article;