import React from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';

export default class Editor extends React.Component {
    render() {
        return <ReactQuill {...this.props} />;
    }
}
