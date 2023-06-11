import { PageBackground } from '~/components/Background/Background';
import HomeLink from '~/components/HomeLink/HomeLink';
import { AdminMenu } from '~/constants/Menus';

export default function Dashboard() {
    return (
        <>
            <PageBackground>
                <div className="dashboard-home flex end column al-center">
                    <div className="home-spas-links">
                        {AdminMenu.map((item, index) => {
                            return <HomeLink icon={<item.icon />} text={item.name} href={item.url} key={index} />;
                        })}
                        {/* <HomeLink icon={<BlogIcon />} href={makePrivateRoute(PrivateRoutes.NEWS)} text="Blog" />
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
                        <HomeLink icon={<DraftIcon />} href={makePrivateRoute('draft')} text="Draft" /> */}
                    </div>
                </div>
            </PageBackground>
        </>
    );
}
