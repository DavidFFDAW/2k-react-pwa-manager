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
                            if (item.showOnSidebar)
                                return <HomeLink icon={<item.icon />} text={item.name} href={item.url} key={index} />;
                        })}
                    </div>
                </div>
            </PageBackground>
        </>
    );
}
