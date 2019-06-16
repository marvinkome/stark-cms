import React from 'react';
import Layout from 'components/layout';
import CollapsibleCard from 'components/collapsibleCard';
import { MdClose } from 'react-icons/md';

import './dashboard.scss';

export default class Dashboard extends React.Component {
    render() {
        return (
            <Layout>
                <div className="db__dashboard">
                    <h1 className="page__name">Dashboard</h1>

                    <div className="welcome-card">
                        <h2 className="title">Welcome to Test Site</h2>
                        <p>
                            This is your website dashboard from stark cms, create a post to start
                            publishing, lorem ipsuim dolor sit ammet conscetur lorem ipsuim dolor
                            sit ammet conscetur lorem ipsuim dolor sit ammet conscetur.
                        </p>

                        <div className="close-icon">
                            <MdClose className="icon" />
                        </div>
                    </div>

                    <div className="flex-container">
                        <div className="first-col">
                            <CollapsibleCard title="At a Glance">
                                <div className="glance">
                                    <a href="/">0 posts</a>
                                    <a href="/">0 comments</a>
                                    <p>Using Stark CMS - 0.0.1</p>
                                </div>
                            </CollapsibleCard>

                            <CollapsibleCard title="Activity">
                                <div className="post activity">
                                    <h5>Recently Published</h5>
                                    <p>
                                        Jun 6th, 8:35am
                                        <a href="/">Hello World</a>
                                    </p>
                                    <p>
                                        Jun 6th, 8:35am
                                        <a href="/">Hello World</a>
                                    </p>
                                </div>

                                <div className="comment activity">
                                    <h5>Recently Comments</h5>
                                    <div>
                                        <p className="comment_author">
                                            From username on Hello World
                                        </p>
                                        <p className="comment">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Incidunt quasi itaque dolorum nemo, laudantium ad saepe
                                            ipsa quia obcaecati error ex officia veritatis assumenda
                                            vero laboriosam minus sint exercitationem tempora!
                                        </p>
                                    </div>
                                </div>
                            </CollapsibleCard>
                        </div>

                        <div className="second-col">
                            <CollapsibleCard title="Quick Draft">
                                <div className="draft">
                                    <form>
                                        <div className="form-group">
                                            <input id="title" type="text" placeholder="Title" />
                                        </div>

                                        <div className="form-group">
                                            <textarea
                                                rows="5"
                                                placeholder="Write an interesting post"
                                            />
                                        </div>

                                        <button className="btn primary--btn">Save Draft</button>
                                    </form>
                                </div>
                            </CollapsibleCard>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}
