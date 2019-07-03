import React from 'react';

export default class PostAside extends React.Component {
    state = {
        tags: []
    };

    onAddTag = (e) => {
        e.preventDefault();

        const tagInput = e.target['tagInput'].value;

        // split input into array
        const tags = tagInput.split(',');

        this.setState({
            tags: this.state.tags.concat(...tags)
        });

        e.target['tagInput'].value = '';
    };

    onRemoveTag = (itemIndex) => {
        const newTags = this.state.tags.filter((item, index) => index !== itemIndex);
        this.setState({
            tags: newTags
        });
    };

    renderCategories = () => {
        return (
            <div className="aside--container">
                <h3>Categories</h3>

                <div className="aside-box">
                    <label className="checkbox-container">
                        <p className="checkbox-title">Uncategorized</p>
                        <input className="checkbox" type="checkbox" />
                        <span className="checkmark" />
                    </label>
                    <a className="add-new-link" href="/">
                        + Add new category
                    </a>
                </div>
            </div>
        );
    };

    renderTags = () => {
        return (
            <div className="aside--container">
                <h3>Tags</h3>

                <div className="aside-box">
                    <form onSubmit={this.onAddTag} className="form-container">
                        <input id="tagInput" placeholder="Add tags" />
                        <button className="btn secondary--btn">Add</button>
                        <p className="small">
                            <i>Seperate tags in commas</i>
                        </p>
                    </form>

                    {/* tag list */}
                    <p className="tag-list">
                        {this.state.tags.map((item, index) => (
                            <span key={index} className="tag-item">
                                <span onClick={() => this.onRemoveTag(index)} className="close">
                                    x
                                </span>
                                {item}
                            </span>
                        ))}
                    </p>
                </div>
            </div>
        );
    };

    render() {
        return (
            <div className="post_aside">
                {this.renderCategories()}
                {this.renderTags()}
            </div>
        );
    }
}
