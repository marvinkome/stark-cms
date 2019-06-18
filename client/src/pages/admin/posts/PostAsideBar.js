import React, { Component } from 'react';

export default class PostAsideBar extends Component {
    render() {
        return (
            <div className="post-aside__container">
                <div className="aside--box --box1">
                    <h3>Categories</h3>
                    <hr />
                </div>

                <div className="aside--box --box1">
                    <h3>Tags</h3>
                    <hr />
                </div>
            </div>
        );
    }
}
