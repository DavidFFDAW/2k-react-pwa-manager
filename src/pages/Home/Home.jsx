import { PageBackground } from '~/components/Background/Background';
import HomeLink from '~/components/HomeLink/HomeLink';
import { PublicMenu } from '~/constants/Menus';

export default function HomeDashboard() {
    return (
        <PageBackground custom={'principal'}>
            <div className="dashboard-home flex end column al-center">
                <div className="home-spas-links">
                    {PublicMenu.map((item, index) => {
                        return <HomeLink href={item.url} icon={<item.icon />} text={item.name} key={index} />;
                    })}
                </div>
            </div>
        </PageBackground>
    );
}
