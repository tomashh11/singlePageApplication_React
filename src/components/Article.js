import React from "react";

const Article = ({title, author, text}) => {

    return (
        <article>
            <h3 style={{
                fontSize: "20px",
                marginBottom: "3px",
                textTransform: "uppercase"
            }}>{title}</h3>
            <span style={{
                fontSize: "12px",
                display: "block",
                marginBottom: "10px",
            }}>{author}</span>
            <p style={{
                fontSize: "14px"
            }}>{text}</p>
        </article>
    )
};

export default Article;