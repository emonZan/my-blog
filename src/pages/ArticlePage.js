import React from 'react';
import { useParams } from 'react-router-dom';
import ArticlesList from '../component/ArticlesList';
import articles from './article-content';

const ArticlePage = () => {
    const name = useParams().name;
    const article = articles.find(article => article.name === name);
    const otherArticles = articles.filter(article =>article.name !== name);
    if (!article) return <h1>Article does not exist!</h1>
    return (
        <>
            <h2>{article.title}</h2>
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <ArticlesList articles={otherArticles}></ArticlesList>
        </>
    )
}
export default ArticlePage;