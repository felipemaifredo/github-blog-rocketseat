import { useContextSelector } from "use-context-selector"
import { GithubDataContext } from "../contexts/githubContext"
import { FaGithub } from "react-icons/fa"
import { IoPeople } from "react-icons/io5"
import { FaArrowUpRightFromSquare } from "react-icons/fa6"

export const Profile = () => {
    const githubProfileData = useContextSelector(GithubDataContext, (context) => {
        return context.githubProfileData
    })

    return(
        <section className="profile-section">
            <div className="profile-container">
                <img src={githubProfileData.avatar_url} />
                <div className="profile-data-container">
                    <div className="name-box">
                        <p> {githubProfileData.name} </p>
                        <a href={githubProfileData.html_url} target="_blanck"> Github <FaArrowUpRightFromSquare /> </a>
                    </div>
                    <p className="profile-bio">{githubProfileData.bio}</p>
                    <div className="links-container">
                        <a href={githubProfileData.html_url} target="_blanck"> <FaGithub /> {githubProfileData.login} </a>
                        <p> <IoPeople /> {githubProfileData.followers} Seguidores </p>
                    </div>
                </div>
            </div>
        </section>
    )
}