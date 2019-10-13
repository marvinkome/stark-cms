import React from 'react';
import Editor from 'components/editor';

export default class PostEditor extends React.Component {
    state = {
        title: '',
        content: ''
    };

    onTitleChange = ({ target: { value } }) => {
        this.setState({ title: value });
        this.props.onChange('title', value);
    };

    onContentChange = (content) => {
        this.setState({ content });
        this.props.onChange('content', content);
    };

    render() {
        const { title, content } = this.state;

        return (
            <div className="post_editor">
                <div className="editor-container">
                    <div className="main-editor">
                        <input
                            type="text"
                            placeholder="Add Title"
                            className="form-input title-input"
                            value={title}
                            onChange={this.onTitleChange}
                        />

                        <Editor
                            bounds=".main-editor"
                            placeholder="Start Writing"
                            value={content}
                            onChange={this.onContentChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
