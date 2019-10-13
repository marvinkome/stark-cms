import React from 'react';
import Layout from 'components/layout';
import { errorHandler, redirectWithFlash } from 'lib/helpers';

import Editor from './editor';
import Aside from './postAside';

import '../create_posts.scss';

export default class CreatePostView extends React.Component {
    state = {
        title: '',
        content: ''
    };

    onChange = (key, value) => {
        this.setState({ [key]: value });
    };

    onSave = async (saveType) => {
        try {
            await this.props.addPost({
                variables: { ...this.state, status: saveType }
            });

            // redirect back to post list with flash message
            // TODO:: Redirect to edit page
            redirectWithFlash(
                '/admin/posts',
                saveType === 'draft' ? 'Post draft saved' : 'Post published',
                'success'
            );
        } catch (e) {
            errorHandler('Error creating posts', e);
        }
    };

    render() {
        return (
            <Layout>
                <div className="db_create_posts">
                    <h1 className="page__name">Create New Post</h1>

                    <div className="create_posts_container">
                        <Editor onChange={this.onChange} />
                        <Aside onSave={this.onSave} />
                    </div>
                </div>
            </Layout>
        );
    }
}
