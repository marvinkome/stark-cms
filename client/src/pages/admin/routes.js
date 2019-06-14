import React from 'react';

// import the icons you want to use for the route
import { MdAvTimer } from 'react-icons/md';

// pages
import Dashboard from './dashboard';
import Post from './posts';

/**
 * Array format
 * { name: string, icon: component, path: string, children: array of same format }
 */
const routes = [
    {
        name: 'Dashboard',
        icon: <MdAvTimer />,
        children: [
            {
                name: 'Home',
                path: '/admin',
                component: Dashboard
            }
        ]
    },
    {
        name: 'Posts',
        path: '/admin/posts',
        component: Post
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
