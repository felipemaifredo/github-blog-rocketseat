//Sections
import { BannerInitial } from "../sections/BannerInitial"
import { Profile } from "../sections/Profile"

export const Home = () => {
    return(
        <>
            <BannerInitial />
            <Profile />
            <p>Home</p>
        </>
    )
}