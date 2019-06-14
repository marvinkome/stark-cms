import React from 'react';
import logo from '../../images/logo.svg';
import SidebarRoutes from './SidebarRoutes';
import routes from 'pages/admin/routes';

export default class Sidebar extends React.Component {
    render() {
        return (
            <div className="db__sidebar">
                <img src={logo} width="150px" alt="logo" />

                {/* get all admin routes and pass to SidebarRoutes */}
                <SidebarRoutes contents={routes} />
            </div>
        );
    }
}
