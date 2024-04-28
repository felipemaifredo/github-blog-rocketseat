import { createContext } from "use-context-selector"
import { ReactNode, useState, useCallback, useEffect } from "react"
import { api } from "../lib/axios"

interface GithubProfileData {
  login: string
  id: string
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
  name: string
  company: string | null
  blog: string
  location: string
  email: string | null
  hireable: boolean | null
  bio: string
  twitter_username: string | null
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

interface GithubIssuesData {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: GithubProfileData;
  labels: unknown[]; // You might want to define this more precisely if you know the label structure
  state: string;
  locked: boolean;
  assignee: null | unknown; // Define the type for assignee if known
  assignees: unknown[]; // Define the type for assignees if known
  milestone: null | unknown; // Define the type for milestone if known
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: string | null;
  author_association: string;
  active_lock_reason: string | null;
  body: string;
  reactions: Reactions;
  timeline_url: string;
  performed_via_github_app: null | unknown; // Define the type for GitHub app if known
  state_reason: string | null;
  score: number;
}

interface Reactions {
  url: string;
  total_count: number;
  '+1': number;
  '-1': number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
}

interface GithubDataContextType {
  githubProfileData: GithubProfileData
  githubIssuesData: GithubIssuesData[]
  fetchGithubIssuesData: (searchTerm: string) => Promise<void>
  clearIssues: () => void
}

interface GithubDataProviderProps {
  children: ReactNode
}

export const GithubDataContext = createContext({} as GithubDataContextType)

export function GithubDataProvider({ children }: GithubDataProviderProps) {
  const [ githubProfileData, setGithubData ] = useState<GithubProfileData | null>(null)
  const [ githubIssuesData, setGithubIssuesData ] = useState<GithubIssuesData[]>([])
  
  const repo = "github-blog-rocketseat"
  const user = "felipemaifredo"

  const fetchGithubProfileData = useCallback(async () => {
    try {
      const response = await api.get("/users/felipemaifredo")
      setGithubData(response.data)
    } catch (error) {
      console.error("Erro ao buscar dados do Github:", error)
    }
  }, [])

  const fetchGithubIssuesData = useCallback(async (searchTerm: string) => {
    try {
      const response = await api.get(`/search/issues?q=${searchTerm}%20repo:${user}/${repo}`)
      setGithubIssuesData(response.data.items)
    } catch (error) {
      console.error("Erro ao buscar dados do Github:", error)
    }
  }, [])

  const clearIssues = () => {
    setGithubIssuesData([])
  }

  useEffect(() => {
    fetchGithubProfileData()
  }, [fetchGithubProfileData])

  if (githubProfileData === null) {
    return <div>Carregando...</div>
  }

  return (
    <GithubDataContext.Provider value={{ githubProfileData, githubIssuesData, fetchGithubIssuesData, clearIssues }}>
      {children}
    </GithubDataContext.Provider>
  )
}