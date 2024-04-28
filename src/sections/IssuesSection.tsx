import { useContextSelector } from "use-context-selector"
import { GithubDataContext } from "../contexts/githubContext"
import { Link } from "react-router-dom"

export const IssuesSection = () => {
    const githubIssuesData = useContextSelector(GithubDataContext, (context) => {
        return context.githubIssuesData
    })

    return (
        <section className="issues-section">
            <div className="issues-container">
                {githubIssuesData.map((issue) => (
                    <Link to={`/issue/${issue.number}`} className="issues-box" key={issue.id}>
                        <div> 
                            <p className="title">{issue.title}</p>
                            <p>Há 1 Dia</p>
                        </div>
                        <p>{issue.body}</p>
                    </Link>
                ))}
                { githubIssuesData.length === 0 && <p className="not-issue">Nenhuma Issue encontrada</p> }
            </div>
        </section>
    )
}