import React from 'react';
import logo from '../../images/logo.svg';
import SidebarRoutes from './SidebarRoutes';

export default class Sidebar extends React.Component {
    state = {
        contents: [
            {
                name: 'Dashboard',
                title: 'Home',
                link: '/',
                id: 1
            },
            {
                name: 'Posts',
                title: 'Create post',
                link: '/posts',
                id: 2
            },
            {
                name: 'Media Files',
                title: 'Images',
                link: '/images',
                id: 3
            },
            {
                name: 'Pages',
                title: 'Posts',
                link: '/pages',
                id: 4
            },
            {
                name: 'Plugins',
                title: 'Themes',
                link: '/plugins',
                id: 5
            }
        ]
    };

    render() {
        return (
            <div className="db__sidebar">
                <img src={logo} width="150px" alt="logo" />
                <SidebarRoutes contents={this.state.contents} />
            </div>
        );
    }
}
