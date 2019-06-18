import React from 'react';
import Layout from 'components/layout';
import PostEditor from './PostEditor';
import PostAsideBar from './PostAsideBar';

export default class Posts extends React.Component {
    render() {
        return (
            <Layout>
                <div className="post__container">
                    <h3>Create New Post</h3>
                    <div className="editor_topbar">
                        <button className="btn btn--preview">Preview</button>
                        <button className="btn btn--publish">Publish</button>
                        <button className="btn btn--draft">Save to Draft</button>
                    </div>
                    <PostEditor />
                    <PostAsideBar />
                </div>
            </Layout>
        );
    }
}
