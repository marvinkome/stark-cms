import React from 'react';

import Sidebar from './sidebar';
import Topbar from './topbar';

export default class Layout extends React.Component {
    render() {
        return (
            <div className="db__container">
                <Topbar />
                <Sidebar />
                <div className="db__main">{this.props.children}</div>
            </div>
        );
    }
}
