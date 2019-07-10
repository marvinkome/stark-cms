import React from 'react';
import Editor from 'components/editor';

export default class PostEditor extends React.Component {
    render() {
        return (
            <div className="post_editor">
                <div className="editor-container">
                    <input type="text" placeholder="Add Title" className="form-input title-input" />
                    <div className="main-editor">
                        <Editor bounds=".main-editor" placeholder="Start Writing">
                            <div className="editing-area form-input" />
                        </Editor>
                    </div>
                </div>
            </div>
        );
    }
}
