import { Component } from 'react';
import Butter from 'buttercms';
import Helmet from 'vitaminjs/react-helmet';

const BlogPost = ({ post }) => (
    <div>
        <Helmet>
            <title>{post.title.rendered}</title>
        </Helmet>
        <h1>{post.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{__html: post.content.rendered}} />
    </div>
);

export default BlogPost;