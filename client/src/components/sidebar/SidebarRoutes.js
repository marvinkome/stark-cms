import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Toggle from 'components/ToggleComponent';

export default class SidebarRoutes extends Component {
    renderChilren = (items) => {
        return items.map((item, index) => (
            <div key={index}>
                <span className="sidebar__title">
                    {item.icon}
                    {item.path && (
                        <Link to={item.path}>
                            <p>{item.title}</p>
                        </Link>
                    )}
                </span>
            </div>
        ));
    };

    render() {
        const { contents } = this.props;
        return (
            <div>
                {contents.map((item, index) => {
                    return (
                        <div key={index}>
                            <Toggle>
                                {({ on, toggle }) => (
                                    <div>
                                        <span className="sidebar__title">
                                            {item.icon}
                                            {item.path ? (
                                                <Link to={item.path}>
                                                    <h3>{item.title}</h3>
                                                </Link>
                                            ) : (
                                                item.children && (
                                                    <h3 onClick={toggle}>{item.title}</h3>
                                                )
                                            )}
                                        </span>

                                        {on && item.children && this.renderChilren(item.children)}
                                    </div>
                                )}
                            </Toggle>
                        </div>
                    );
                })}
            </div>
        );
    }
}
