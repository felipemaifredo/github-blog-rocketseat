//Sections
import { BannerInitial } from "../sections/BannerInitial"
import { Profile } from "../sections/Profile"
import { SearchSection } from "../sections/SearchSection"
export const Home = () => {
    return(
        <>
            <BannerInitial />
            <Profile />
            <SearchSection />
        </>
    )
}