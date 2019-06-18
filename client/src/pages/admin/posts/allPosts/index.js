import React from 'react';
import Layout from 'components/layout';

export default class AllPosts extends React.Component {
    render() {
        return (
            <Layout>
                <div className="db_all_posts">
                    <h1 className="page__name">All Posts</h1>
                </div>
            </Layout>
        );
    }
}
