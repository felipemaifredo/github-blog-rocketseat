import { useContextSelector } from "use-context-selector"
import { GithubDataContext } from "../contexts/githubContext"

export const IssuesSection = () => {
    const githubIssuesData = useContextSelector(GithubDataContext, (context) => {
        return context.githubIssuesData
    })

    return (
        <section>
            {githubIssuesData.map((issue) => (
                <p>{issue.title}</p>
            ))}
        </section>
    )
}