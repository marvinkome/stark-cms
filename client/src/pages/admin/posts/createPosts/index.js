import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { errorHandler } from 'lib/helpers';
import { ADD_POST } from './gql';
import CreatePostView from './components';
import { toast } from 'react-toastify';

export default function CreatePosts() {
    const [addPostFn, { error, data }] = useMutation(ADD_POST);

    if (error) {
        errorHandler('Error creating posts', error);
    }

    if (data) {
        toast.success('Post created. Redirecting to post page');
    }

    return <CreatePostView addPost={addPostFn} />;
}
