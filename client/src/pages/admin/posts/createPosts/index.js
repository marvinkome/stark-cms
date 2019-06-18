import React from 'react';
import Layout from 'components/layout';

import Editor from './components/editor';
import Aside from './components/postAside';

import './create_posts.scss';

export default class CreatePosts extends React.Component {
    render() {
        return (
            <Layout>
                <div className="db_create_posts">
                    <h1 className="page__name">Create New Post</h1>

                    <div className="create_posts_container">
                        <Editor />
                        <Aside />
                    </div>
                </div>
            </Layout>
        );
    }
}
