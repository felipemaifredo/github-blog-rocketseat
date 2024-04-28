//Sections
import { BannerInitial } from "../sections/BannerInitial"
import { Profile } from "../sections/Profile"
import { SearchSection } from "../sections/SearchSection"
import { IssuesSection } from "../sections/IssuesSection"

export const Home = () => {
    return(
        <>
            <BannerInitial />
            <Profile />
            <SearchSection />
            <IssuesSection />
        </>
    )
}