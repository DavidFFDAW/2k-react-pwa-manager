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
        name: 'BLOG',
        url: makePrivateRoute(PrivateRoutes.BLOG),
        icon: BlogIcon,
        material: 'feed',
        submenu: [
            {
                label: 'Listado',
                href: makePrivateRoute(PrivateRoutes.BLOG),
                material: 'list',
            },
            {
                label: 'Nuevo post',
                href: makePrivateRoute(PrivateRoutes.BLOG),
                material: 'add_circle',
            },
        ],
    },
    {
        name: 'WRESTLERS',
        url: makePrivateRoute(PrivateRoutes.WRESTLER),
        material: 'group',
        icon: WrestlersIcon,
    },
    {
        name: 'CHAMPIONS',
        url: makePrivateRoute(PrivateRoutes.CHAMPIONS),
        material: 'trophy',
        icon: WWEChampionship,
    },
    {
        name: 'EQUIPOS',
        url: makePrivateRoute(PrivateRoutes.TEAMS),
        material: 'diversity_3',
        icon: TeamsIcon,
    },
    {
        name: 'USER',
        url: makePrivateRoute(PrivateRoutes.USER),
        material: 'person',
        icon: UserIcon,
    },
    {
        name: 'TWITTER',
        url: makePrivateRoute(PrivateRoutes.TWITTER),
        material: 'post',
        icon: TwitterIcon,
    },
    {
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
