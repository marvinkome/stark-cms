import React from 'react';

// import the icons you want to use for the route
import {
    MdEqualizer,
    MdLibraryBooks,
    MdLayers,
    MdColorLens,
    MdSpeakerNotes,
    MdGraphicEq
} from 'react-icons/md';

// pages
import Dashboard from './dashboard';
import AllPost from './posts/allPosts';
import CreatePost from './posts/createPosts';
import UserProfile from './users/userProfile';
import AddUsers from './users/addUser';

/**
 * Array format
 * { name: string, icon: component, path: string, children: array of same format }
 */
const routes = [
    {
        title: 'Overview',
        icon: <MdEqualizer className="icon" />,
        children: [
            {
                title: 'Home',
                path: '/admin',
                component: Dashboard
            },
            {
                title: 'Updates',
                path: '/admin/updates',
                component: Dashboard
            }
        ]
    },
    {
        title: 'Posts',
        icon: <MdLibraryBooks className="icon" />,
        children: [
            {
                title: 'All Posts',
                path: '/admin/posts',
                component: AllPost
            },
            {
                title: 'Add New',
                path: '/admin/posts-new',
                component: CreatePost
            }
        ]
    },
    {
        title: 'Pages',
        icon: <MdLayers className="icon" />,
        children: [
            {
                title: 'Your Profile',
                path: '/admin/profile',
                component: UserProfile
            },
            {
                title: 'Add new',
                path: '/admin/add_users',
                component: AddUsers
            }
        ]
    },
    {
        title: 'Templates',
        icon: <MdColorLens className="icon" />,
        children: [
            {
                title: 'Your Profile',
                path: '/admin/profile',
                component: UserProfile
            },
            {
                title: 'Add new',
                path: '/admin/add_users',
                component: AddUsers
            }
        ]
    },
    {
        title: 'Comments',
        icon: <MdSpeakerNotes className="icon" />,
        children: [
            {
                title: 'Your Profile',
                path: '/admin/profile',
                component: UserProfile
            },
            {
                title: 'Add new',
                path: '/admin/add_users',
                component: AddUsers
            }
        ]
    },
    {
        title: 'Settings',
        icon: <MdGraphicEq className="icon" />,
        children: [
            {
                title: 'General',
                path: '/admin/settings',
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
