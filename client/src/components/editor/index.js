import React from 'react';
import EditorJS from '@editorjs/editorjs';

import header from '@editorjs/header';
import list from '@editorjs/list';
import image from '@editorjs/image';

export default class Editor extends React.Component {
    holder = React.createRef();

    componentDidMount() {
        this.editor = new EditorJS({
            holder: 'stark_editor',
            placeholder: 'Let\'s write an awesome post!',
            tools: {
                header,
                list,
                image
            }
        });
    }

    render() {
        return <div className={this.props.className} id="stark_editor" />;
    }
}
