import React from 'react';
import Layout from 'components/layout';
// import CollapsibleCard from 'components/collapsibleCard';
import chart from '../../../images/Chart.png';
import { MdClose } from 'react-icons/md';

import './dashboard.scss';

export default class Dashboard extends React.Component {
    render() {
        return (
            <Layout>
                <div className="db__home">
                    <h1 className="page__name">Overview</h1>

                    <div className="welcome--card">
                        <div>
                            <h3 className="welcome--title">Hi Marvin!</h3>
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

                    <div className="stats--card">
                        <h3>Stats</h3>
                        <div className="stats--first-column">
                            <div className="stats--cards">
                                <span />
                                <p>Views today</p>
                                <p>1,500</p>
                            </div>
                            <div className="stats--cards">
                                <span />
                                <p>Posts</p>
                                <p>500</p>
                            </div>
                            <div className="stats--cards">
                                <span />
                                <p>Pages</p>
                                <p>5</p>
                            </div>
                        </div>

                        <div className="stats--data">
                            <h3>Monthly Visitors</h3> <span />
                            <div>
                                <img src={chart} alt="Chart" />
                            </div>
                        </div>
                        <div className="comments" />
                    </div>
                </div>
            </Layout>
        );
    }
}
