import React from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';

export default class Editor extends React.Component {
    state = {
        content: ''
    };

    handleChange = (content) => {
        this.setState({ content });
    };

    render() {
        return (
            <ReactQuill value={this.state.content} onChange={this.handleChange} {...this.props} />
        );
    }
}
