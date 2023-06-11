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
        url: makeRoute(PrivateRoutes.NEWS),
        icon: BlogIcon,
    },
];

export const AdminMenu = [
    {
        name: 'BLOG',
        url: makePrivateRoute(PrivateRoutes.NEWS),
        icon: BlogIcon,
    },
    {
        name: 'WRESTLERS',
        url: makePrivateRoute(PrivateRoutes.WRESTLER),
        icon: WrestlersIcon,
    },
    {
        name: 'CHAMPIONS',
        url: makePrivateRoute(PrivateRoutes.CHAMPIONS),
        icon: WWEChampionship,
    },
    {
        name: 'EQUIPOS',
        url: makePrivateRoute(PrivateRoutes.TEAMS),
        icon: TeamsIcon,
    },
    {
        name: 'USER',
        url: makePrivateRoute(PrivateRoutes.USER),
        icon: UserIcon,
    },
    {
        name: 'TWITTER',
        url: makePrivateRoute(PrivateRoutes.TWITTER),
        icon: TwitterIcon,
    },
    {
        name: 'DRAFT',
        url: makePrivateRoute(PrivateRoutes.DRAFT),
        icon: DraftIcon,
    },
];

export const HeaderMenu = {
    public: PublicMenu,
    admin: AdminMenu,
};
