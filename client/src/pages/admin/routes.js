import React from 'react';

// import the icons you want to use for the route
import { MdAvTimer, MdLibraryBooks, MdAccountCircle, MdGraphicEq } from 'react-icons/md';

// pages
import Dashboard from './dashboard';
import Post from './posts';

/**
 * Array format
 * { name: string, icon: component, path: string, children: array of same format }
 */
const routes = [
    {
        title: 'Dashboard',
        icon: <MdAvTimer className="icon" />,
        children: [
            {
                title: 'Home',
                path: '/admin',
                component: Dashboard
            },
            {
                title: 'Posts',
                path: '/admin',
                component: Dashboard
            }
        ]
    },
    {
        title: 'Posts',
        icon: <MdLibraryBooks className="icon" />,
        children: [
            {
                title: 'Create Posts',
                path: '/admin/posts',
                component: Post
            }
        ]
    },
    {
        title: 'Users',
        icon: <MdAccountCircle className="icon" />,
        children: [
            {
                title: 'Admin',
                path: '/admin/users',
                component: Dashboard
            }
        ]
    },
    {
        title: 'Settings',
        icon: <MdGraphicEq className="icon" />,
        children: [
            {
                title: 'General',
                path: '/admin/users',
                component: Dashboard
            }
        ]
    }
];

function formatRoutes() {
    const froutes = routes.reduce((total, route) => {
        // check if it's not a main route
        if (route.path) {
            total.push(route);
        }

        // if has children
        if (route.children) {
            route.children.forEach((child) => {
                total.push(child);
            });
        }

        return total;
    }, []);

    return froutes;
}

export const routerPaths = formatRoutes();
export default routes;
