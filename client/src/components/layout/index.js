import React from 'react';

import Sidebar from '../sidebar';
import Topbar from '../topbar';

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Topbar />
                <Sidebar />
                {this.props.children}
            </div>
        );
    }
}
