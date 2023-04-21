import { PageBackground } from '~/components/Background/Background';
import { makePrivateRoute } from '~/utilities/private.route.utility';
import { PrivateRoutes } from '~/constants/routes';
import HomeLink from '~/components/HomeLink/HomeLink';

export default function Dashboard() {
    return (
        <PageBackground>
            <div className="h1 flex column end al-center gap-small home-spas-links">
                {/* <img src="/icons/icon-128x128.png" alt="" /> */}
                <HomeLink href={makePrivateRoute(PrivateRoutes.NEWS)} text="Blog" />
                <HomeLink href={makePrivateRoute(PrivateRoutes.WRESTLER)} text="Wrestlers" />
                <HomeLink href={makePrivateRoute(PrivateRoutes.CHAMPIONS)} text="Champions" />
                <HomeLink href={makePrivateRoute(PrivateRoutes.TEAMS)} text="Teams" />
                <HomeLink href={makePrivateRoute(PrivateRoutes.USER)} text="User" />
                <HomeLink href={makePrivateRoute(PrivateRoutes.TWITTER)} text="Twitter" />
                <HomeLink href={makePrivateRoute(PrivateRoutes.GALLERY)} text="Gallería" />
            </div>
        </PageBackground>
    );
}
