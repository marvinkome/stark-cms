import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SidebarRoutes extends Component {
    renderSubMenu = (menus) => {
        return menus.map((item) => {
            return (
                <div className="item--c" key={item.id}>
                    <hr />
                    {item.icon}
                    {item.path ? (
                        <Link to={item.path}>
                            <h3>{item.name}</h3>
                        </Link>
                    ) : (
                        <h3>{item.name}</h3>
                    )}
                    <hr />
                </div>
            );
        });
    };

    render() {
        const { contents } = this.props;

        return (
            <div className="sb__c">
                {/* map through each route and render */}
                {contents.map((item) => {
                    return (
                        <div className="item--c" key={item.id}>
                            {item.icon}
                            {item.path ? (
                                <Link to={item.path}>
                                    <h3>{item.name}</h3>
                                </Link>
                            ) : (
                                <h3>{item.name}</h3>
                            )}

                            {/* check if it has sub routes the render those too */}
                            {item.children && this.renderSubMenu(item.children)}
                        </div>
                    );
                })}
            </div>
        );
    }
}
