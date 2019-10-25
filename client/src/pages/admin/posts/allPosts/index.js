import React from 'react';
import Layout from 'components/layout';
import { MdSearch } from 'react-icons/md';

import './all_posts.scss';

export default class AllPosts extends React.Component {
    render() {
        return (
            <Layout>
                <div className="db_all_posts">
                    <div className="page-header">
                        <h2 className="page__name">All Posts</h2>

                        <div className="nav--lists">
                            <select className="select">
                                <option>Select category</option>
                                <option>Uncategorized</option>
                            </select>

                            <form className="nav--form">
                                {' '}
                                <MdSearch className="search--icon" />
                                <input
                                    className="nav--search"
                                    type="text"
                                    placeholder="Search posts"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}
