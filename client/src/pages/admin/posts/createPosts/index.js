import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_POST } from './gql';
import CreatePostView from './components';

export default function CreatePosts() {
    const [addPostFn] = useMutation(ADD_POST);

    return <CreatePostView addPost={addPostFn} />;
}
