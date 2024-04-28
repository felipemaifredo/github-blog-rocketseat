import { useContextSelector } from "use-context-selector"
import { GithubDataContext } from "../contexts/githubContext"

export const IssuesSection = () => {
    const githubIssuesData = useContextSelector(GithubDataContext, (context) => {
        return context.githubIssuesData
    })

    return (
        <section className="issues-section">
            <div className="issues-container">
                {githubIssuesData.map((issue) => (
                    <div className="issue-box" key={issue.id}>
                        <div> 
                            <p className="title">{issue.title}</p>
                            <p>Há 1 Dia</p>
                        </div>
                        <p>{issue.body}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}