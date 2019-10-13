import React from 'react';
// import CollapsibleCard from 'components/collapsibleCard';

export default class PostAside extends React.Component {
    render() {
        return (
            <div className="post_aside">
                <div className="publish-box">
                    <p className="status">
                        Status: <span className="status-text">Saved as draft</span>
                    </p>

                    <div className="action-btns">
                        <button
                            onClick={() => this.props.onSave('publish')}
                            className="publish-btn btn"
                        >
                            Publish
                        </button>

                        <button
                            onClick={() => this.props.onSave('draft')}
                            className="draft-btn btn-outline btn"
                        >
                            Save Draft
                        </button>
                    </div>

                    <p className="last-saved">Last saved 8 mins ago</p>
                </div>

                {/* <CollapsibleCard title="Categories">
                    <div className="aside-box">
                        <label className="checkbox-container outline">
                            <p className="checkbox-title">Uncategorized</p>
                            <input className="checkbox" type="checkbox" />
                            <span className="checkmark" />
                        </label>
                        <a className="add-new-link" href="/">
                            <span className="plus-icon">+</span> <span>Add new category</span>
                        </a>
                    </div>
                </CollapsibleCard> */}
            </div>
        );
    }
}
