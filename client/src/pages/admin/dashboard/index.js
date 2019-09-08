import React from 'react';
import Layout from 'components/layout';
// import CollapsibleCard from 'components/collapsibleCard';
import { MdClose } from 'react-icons/md';

import './dashboard.scss';

export default class Dashboard extends React.Component {
    render() {
        return (
            <Layout>
                <div className="db__home">
                    <h1 className="page__name">Overview</h1>

                    <div className="welcome--card home--cards">
                        <div>
                            <h2 className="welcome--title">Welcome to Test Site</h2>
                            <p>
                                This is your website dashboard from stark cms, create a post to
                                start publishing, lorem ipsuim dolor sit ammet conscetur lorem
                                ipsuim dolor sit ammet conscetur lorem ipsuim dolor sit ammet
                                conscetur.
                            </p>
                        </div>

                        <div className="close-icon">
                            <MdClose className="icon" />
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}
