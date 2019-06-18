import React, { Component } from 'react';
import Editor from '@stfy/react-editor.js';
import CustomHeader from '@editorjs/header';

import './post_editor.scss';

export default class PostEditor extends Component {
    render() {
        return (
            <div className="editor__container">
                <Editor
                    autofocus
                    holderId="editorjs-container"
                    excludeDefaultTools={['header']}
                    onChange={(data) => console.log(data)}
                    customTools={{
                        header: CustomHeader
                    }}
                    onReady={() => console.log('Start!')}
                    data={{
                        time: 1554920381017,
                        blocks: [
                            {
                                type: 'header',
                                data: {
                                    text: 'Hello Editor.js',
                                    level: 2
                                }
                            }
                        ],
                        version: '2.12.4'
                    }}
                />
            </div>
        );
    }
}
