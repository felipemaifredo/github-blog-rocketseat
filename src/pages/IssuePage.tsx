import { Link, useParams } from "react-router-dom"
import { BannerInitial } from "../sections/BannerInitial"
import { useEffect, useState, useCallback } from "react"
import { api } from "../lib/axios"
import { IoIosArrowBack } from "react-icons/io"
import { FaArrowUpRightFromSquare } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa"

interface Issue {
    url: string
    repository_url: string
    labels_url: string
    comments_url: string
    events_url: string
    html_url: string
    id: number
    node_id: string
    number: number
    title: string
    body: string
    user: {
      login: string
      id: number
      node_id: string
      avatar_url: string
      gravatar_id: string
      url: string
      html_url: string
      followers_url: string
      following_url: string
      gists_url: string
      starred_url: string
      subscriptions_url: string
      organizations_url: string
      repos_url: string
      events_url: string
      received_events_url: string
      type: string
      site_admin: boolean
    }
    labels: unknown[] // você pode definir uma interface específica para rótulos
}

export const IssePage = () => {
    const { id } = useParams()
    const [issueData, setIssueData] = useState<Issue | null>(null)

    const fetchGithubIssuesData = useCallback(async () => {
        try {
            const response = await api.get(`/repos/felipemaifredo/github-blog-rocketseat/issues/${id}`)
            setIssueData(response.data)
        } catch (error) {
            console.error("Erro ao buscar dados do Github:", error)
        }
    }, [id])

    useEffect(() => {
        fetchGithubIssuesData()
    }, [id, fetchGithubIssuesData])

    return (
        <>
            <BannerInitial />
            <section className="issue-container">
                <div className="issue-box">
                    <div className="links-box">
                        <Link to={"/"}> <IoIosArrowBack /> Voltar </Link>
                        <a href={issueData?.html_url} target="_blanck">
                            Ver no Github <FaArrowUpRightFromSquare /> 
                        </a>
                    </div>
                    <p> {issueData?.title} </p>
                    <div>
                        <a 
                            href={issueData?.user.html_url}
                            target="_blanck">    
                            <FaGithub /> {issueData?.user.login} 
                        </a>
                    </div>
                </div>
                <div className="issue-body">
                    {issueData?.body}
                </div>
            </section>
        </>
    )
}