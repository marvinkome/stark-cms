import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { errorHandler, redirectWithFlash } from 'lib/helpers';
import { ADD_POST } from './gql';
import CreatePostView from './components';

export default function CreatePosts(props) {
    const [addPostFn, { error, data }] = useMutation(ADD_POST);

    if (error) {
        errorHandler('Error creating posts', error);
    }

    if (data) {
        redirectWithFlash(props.history, '/admin/posts', 'Draft saved', 'success');
    }

    return <CreatePostView addPost={addPostFn} />;
}
