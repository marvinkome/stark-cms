import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Toggle from 'components/ToggleComponent';

export default class SidebarRoutes extends Component {
    render() {
        const { contents } = this.props;
        const SidebarContents = contents.map((item) => {
            return (
                <div>
                    <Toggle>
                        {({ on, toggle }) => (
                            <div>
                                <span className="sidebar__title">
                                    {item.icon}
                                    <h3 onClick={toggle}>{item.title}</h3>
                                </span>
                                {on && <p className="item">Item here</p>}
                            </div>
                        )}
                    </Toggle>
                </div>
            );
        });
        return <div>{SidebarContents}</div>;
    }
}
