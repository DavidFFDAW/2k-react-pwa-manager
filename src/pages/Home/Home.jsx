import { PageBackground } from "~/components/Background/Background";
import HomeLink from "~/components/HomeLink/HomeLink";
import { PrivateRoutes } from "~/constants/routes";
import { makeRoute } from "~/utilities/private.route.utility";


export default function HomeDashboard() {
    return (
        <PageBackground>
            <div className="h1 flex column end al-center gap-small home-spas-links">
                {/* <img src="/icons/icon-128x128.png" alt="" /> */}
                <HomeLink href={makeRoute('twitter')} text="Twitter" />
                <HomeLink href={makeRoute(PrivateRoutes.PRIVATE)} text="Admin" />
            </div>
        </PageBackground>
    );
}
