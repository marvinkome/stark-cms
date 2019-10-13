import React from 'react';
import { withRouter } from 'react-router-dom';

import Sidebar from './sidebar';
import Topbar from './topbar';

class Layout extends React.Component {
    getFlashMessage = () => {
        const { state } = this.props.history.location;

        if (!state || !state.flashMessage) {
            return null;
        }

        return {
            message: state.flashMessage,
            type: state.flashType
        };
    };

    render() {
        const flash = this.getFlashMessage();

        return (
            <div className="db__container">
                <Topbar />
                <Sidebar />
                <div className="db__main">
                    {flash && (
                        <div className={`alert-box ${flash.type}`}>
                            <p>{flash.message}</p>
                        </div>
                    )}

                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default withRouter(Layout);
