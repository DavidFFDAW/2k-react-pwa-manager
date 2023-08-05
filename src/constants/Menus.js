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
        key: 'menu-blog',
        name: 'BLOG',
        url: makePrivateRoute(PrivateRoutes.BLOG),
        icon: BlogIcon,
        material: 'feed',
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
        name: 'WRESTLERS',
        url: makePrivateRoute(PrivateRoutes.WRESTLER),
        material: 'group',
        icon: WrestlersIcon,
    },
    {
        key: 'menu-champions',
        name: 'CHAMPIONS',
        url: makePrivateRoute(PrivateRoutes.CHAMPIONS),
        material: 'trophy',
        icon: WWEChampionship,
    },
    {
        key: 'menu-teams',
        name: 'EQUIPOS',
        url: makePrivateRoute(PrivateRoutes.TEAMS),
        material: 'diversity_3',
        icon: TeamsIcon,
    },
    {
        key: 'menu-user',
        name: 'USER',
        url: makePrivateRoute(PrivateRoutes.USER),
        material: 'person',
        icon: UserIcon,
    },
    {
        key: 'menu-twitter',
        name: 'TWITTER',
        url: makePrivateRoute(PrivateRoutes.TWITTER),
        material: 'post',
        icon: TwitterIcon,
    },
    {
        key: 'menu-draft',
        name: 'DRAFT',
        url: makePrivateRoute(PrivateRoutes.DRAFT),
        material: 'rebase_edit',
        icon: DraftIcon,
    },
];

export const HeaderMenu = {
    public: PublicMenu,
    admin: AdminMenu,
};
