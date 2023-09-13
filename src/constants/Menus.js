import {
    AdminIcon,
    BlogIcon,
    DraftIcon,
    TeamsIcon,
    TwitterIcon,
    UserIcon,
    WWEChampionship,
    WrestlersIcon,
} from '~/components/Icons/DashboardIcons';

import { makePrivateRoute, makeRoute } from '~/utilities/private.route.utility';
import { PrivateRoutes } from './routes';

export const PublicMenu = [
    {
        name: 'TWITTER',
        url: makeRoute('twitter'),
        icon: TwitterIcon,
    },
    {
        name: 'ADMIN',
        url: makeRoute(PrivateRoutes.PRIVATE),
        icon: AdminIcon,
    },
    {
        name: 'BLOG',
        url: makeRoute(PrivateRoutes.BLOG),
        icon: BlogIcon,
    },
];

export const AdminMenu = [
    {
        key: 'menu-dashboard',
        name: 'Dashboard',
        url: makePrivateRoute(PrivateRoutes.DASHBOARD),
        icon: BlogIcon,
        material: 'dashboard',
        showOnSidebar: false,
    },
    {
        key: 'menu-blog',
        name: 'Blog',
        url: makePrivateRoute(PrivateRoutes.BLOG),
        icon: BlogIcon,
        material: 'feed',
        showOnSidebar: true,
        submenu: [
            {
                key: 'submenu-blog-list',
                label: 'Listado',
                href: makePrivateRoute(PrivateRoutes.BLOG),
                material: 'list',
            },
            {
                key: 'submenu-blog-new',
                label: 'Nuevo post',
                href: makePrivateRoute(PrivateRoutes.BLOG),
                material: 'add_circle',
            },
        ],
    },
    {
        key: 'menu-wrestlers',
        name: 'Wrestlers',
        url: makePrivateRoute(PrivateRoutes.WRESTLER),
        material: 'group',
        icon: WrestlersIcon,
        showOnSidebar: true,
    },
    {
        key: 'menu-champions',
        name: 'Champions',
        url: makePrivateRoute(PrivateRoutes.CHAMPIONS),
        material: 'trophy',
        icon: WWEChampionship,
        showOnSidebar: true,
    },
    {
        key: 'menu-teams',
        name: 'Equipos',
        url: makePrivateRoute(PrivateRoutes.TEAMS),
        material: 'diversity_3',
        icon: TeamsIcon,
        showOnSidebar: true,
    },
    {
        key: 'menu-user',
        name: 'User',
        url: makePrivateRoute(PrivateRoutes.USER),
        material: 'person',
        icon: UserIcon,
        showOnSidebar: true,
    },
    {
        key: 'menu-twitter',
        name: 'Twitter',
        url: makePrivateRoute(PrivateRoutes.TWITTER),
        material: 'post',
        icon: TwitterIcon,
        showOnSidebar: true,
    },
    {
        key: 'menu-draft',
        name: 'Draft',
        url: makePrivateRoute(PrivateRoutes.DRAFT),
        material: 'rebase_edit',
        icon: DraftIcon,
        showOnSidebar: true,
    },
];

export const HeaderMenu = {
    public: PublicMenu,
    admin: AdminMenu,
};
