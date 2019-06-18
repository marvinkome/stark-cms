import React from 'react';
import Editor from 'components/editor';

export default class PostEditor extends React.Component {
    render() {
        return (
            <div className="post_editor">
                {/* topbar */}
                <div className="editor_topbar">
                    <button className="btn btn--preview">Preview</button>
                    <button className="btn btn--publish">Publish</button>
                    <button className="btn btn--draft">Save to Draft</button>
                </div>

                <div className="editor-container">
                    <input type="text" placeholder="Add Title" className="form-input" />
                    <Editor className="main-editor" />
                </div>
            </div>
        );
    }
}
