import React from "react";
import Article from "../components/Article";

const articles = [
    {
        id: 1,
        title: "1. Lorem ipsum dolor sit amet, consectetur.",
        author: "1. Lorem ipsum.",
        text: "2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at consequatur fugit modi molestias neque omnis quidem quis sapiente vero."
    },
    {
        id: 2,
        title: "2. Lorem ipsum dolor sit amet, consectetur.",
        author: "2. Lorem ipsum.",
        text: "2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at consequatur fugit modi molestias neque omnis quidem quis sapiente vero."
    },
    {
        id: 3,
        title: "3. Lorem ipsum dolor sit amet, consectetur.",
        author: "3. Lorem ipsum.",
        text: "3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at consequatur fugit modi molestias neque omnis quidem quis sapiente vero."
    }];

const HomePage = () => {
    const artList = articles.map(article => (
        <Article key={article.id} {...article}/>
    ));

    return (
        <div className="home">
            {artList}
        </div>
    )
};

export default HomePage;