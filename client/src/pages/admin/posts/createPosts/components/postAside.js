import React from 'react';

export default class PostAside extends React.Component {
    render() {
        return (
            <div className="post_aside">
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
