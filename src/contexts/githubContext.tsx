import { createContext } from "use-context-selector"
import { ReactNode, useState, useCallback, useEffect } from "react"
import { api } from "../lib/axios"

/*const githubInputs = {
  login: "",
  id: "",
  node_id: "",
  avatar_url: "",
  gravatar_id: "",
  url: "",
  html_url: "",
  followers_url: "",
  following_url: "",
  gists_url: "",
  starred_url: "",
  subscriptions_url: "",
  organizations_url: "",
  repos_url: "",
  events_url: "",
  received_events_url: "",
  type: "",
  site_admin: false,
  name: "",
  company: null,
  blog: "",
  location: "",
  email: null,
  hireable: null,
  bio: "",
  twitter_username: null,
  public_repos: "",
  public_gists: "",
  followers: "",
  following: "",
  created_at: "",
  updated_at: ""
}*/

interface GithubData {
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

interface GithubDataContextType {
  githubData: GithubData
}

interface GithubDataProviderProps {
  children: ReactNode
}

export const GithubDataContext = createContext({} as GithubDataContextType)

export function GithubDataProvider({ children }: GithubDataProviderProps) {
  const [githubData, setGithubData] = useState<GithubData | null>(null)

  console.log(githubData)

  const fetchGithubData = useCallback(async () => {
    try {
      const response = await api.get("users/felipemaifredo")
      setGithubData(response.data)
    } catch (error) {
      console.error("Erro ao buscar dados do Github:", error)
    }
  }, [])

  useEffect(() => {
    fetchGithubData()
  }, [fetchGithubData])

  if (githubData === null) {
    return <div>Carregando...</div>
  }

  return (
    <GithubDataContext.Provider value={{ githubData }}>
      {children}
    </GithubDataContext.Provider>
  )
}