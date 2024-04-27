import { useContextSelector } from "use-context-selector"
import { GithubDataContext } from "../contexts/githubContext"
import { FaGithub } from "react-icons/fa"
import { IoPeople } from "react-icons/io5"
import { FaArrowUpRightFromSquare } from "react-icons/fa6"

export const Profile = () => {
    const githubData = useContextSelector(GithubDataContext, (context) => {
        return context.githubData
    })

    return(
        <section className="profile-section">
            <div className="profile-container">
                <img src={githubData.avatar_url} />
                <div className="profile-data-container">
                    <div className="name-box">
                        <p> {githubData.name} </p>
                        <a href={githubData.html_url} target="_blanck"> Github <FaArrowUpRightFromSquare /> </a>
                    </div>
                    <p className="profile-bio">{githubData.bio}</p>
                    <div className="links-container">
                        <a href={githubData.html_url} target="_blanck"> <FaGithub /> {githubData.login} </a>
                        <p> <IoPeople /> {githubData.followers} Seguidores </p>
                    </div>
                </div>
            </div>
        </section>
    )
}