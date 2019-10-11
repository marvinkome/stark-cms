import React from 'react';
import Layout from 'components/layout';
// import CollapsibleCard from 'components/collapsibleCard';
import chart from '../../../images/Chart.png';
import { MdClose, MdTimeline, MdCreate, MdComment, MdKeyboardArrowDown } from 'react-icons/md';

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

                        <div className="stats--first-row">
                            <div className="stats--cards">
                                <div className="icon-container">
                                    <MdTimeline className="icon" />
                                </div>

                                <div>
                                    <p>Views today</p>
                                    <p className="stats">1,500</p>
                                </div>
                            </div>
                            <div className="stats--cards">
                                <div className="icon-container">
                                    <MdCreate className="icon" />
                                </div>

                                <div>
                                    <p>Posts</p>
                                    <p className="stats">50</p>
                                </div>
                            </div>
                            <div className="stats--cards">
                                <div className="icon-container">
                                    <MdComment className="icon" />
                                </div>

                                <div>
                                    <p>Comments</p>
                                    <p className="stats">2,553</p>
                                </div>
                            </div>
                        </div>

                        <div className="stats--second-row">
                            <div className="stats--data">
                                <h4>
                                    Monthly Visitors{' '}
                                    <span>
                                        <MdKeyboardArrowDown className="icon" />
                                    </span>
                                </h4>

                                <div>
                                    <img src={chart} alt="Chart" />
                                </div>
                            </div>

                            <div className="stats--comments">
                                <h4>
                                    Recent Comments <span>34</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}
