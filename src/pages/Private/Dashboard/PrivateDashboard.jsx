import { PageBackground } from '~/components/Background/Background';
import { makePrivateRoute } from '~/utilities/private.route.utility';
import { PrivateRoutes } from '~/constants/routes';
import {
    WWEChampionship,
    BlogIcon,
    WrestlersIcon,
    TeamsIcon,
    UserIcon,
    TwitterIcon,
    DraftIcon,
} from '~/components/Icons/DashboardIcons';
import HomeLink from '~/components/HomeLink/HomeLink';

export default function Dashboard() {
    return (
        <>
            <PageBackground>
                <div className="minh1v flex end column al-center">
                    <div className="home-spas-links">
                        {/* <img src="/icons/icon-128x128.png" alt="" /> */}
                        <HomeLink icon={<BlogIcon />} href={makePrivateRoute(PrivateRoutes.NEWS)} text="Blog" />
                        <HomeLink
                            icon={<WrestlersIcon />}
                            href={makePrivateRoute(PrivateRoutes.WRESTLER)}
                            text="Wrestlers"
                        />
                        <HomeLink
                            icon={<WWEChampionship />}
                            href={makePrivateRoute(PrivateRoutes.CHAMPIONS)}
                            text="Champions"
                        />
                        <HomeLink icon={<TeamsIcon />} href={makePrivateRoute(PrivateRoutes.TEAMS)} text="Teams" />
                        <HomeLink icon={<UserIcon />} href={makePrivateRoute(PrivateRoutes.USER)} text="User" />
                        <HomeLink icon={<TwitterIcon />} href={makePrivateRoute(PrivateRoutes.TWITTER)} text="Twitter" />
                        <HomeLink icon={<DraftIcon />} href={makePrivateRoute('draft')} text="Draft" />
                    </div>
                </div>
            </PageBackground>
        </>
    );
}
