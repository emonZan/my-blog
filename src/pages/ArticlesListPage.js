import React from 'react';
import ArticlesList from '../component/ArticlesList';
import articles from './article-content';

const ArticlesListPage = () => {

    return (
        <>
            <h1>Articles List</h1>
            <ArticlesList articles={articles}></ArticlesList>
        </>
    )
}
export default ArticlesListPage;