import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SidebarRoutes extends Component {
    render() {
        const { contents } = this.props;
        const sidebarContents = contents.map((item) => {
            return (
                <div className="item--c" key={item.id}>
                    {/* The Icon should be displayed here {item.icon} */}
                    <h3>{item.name}</h3>
                    <Link to={item.link}>
                        <p>{item.title}</p>
                    </Link>
                </div>
            );
        });
        return <div className="sb__c">{sidebarContents}</div>;
    }
}
