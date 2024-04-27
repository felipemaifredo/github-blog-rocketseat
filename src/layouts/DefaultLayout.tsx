import { Outlet } from "react-router-dom"
import { GithubDataProvider } from "../contexts/githubContext"

export function DefaultLayout() {
    return (
        <>  
            <GithubDataProvider>
                <Outlet />
            </GithubDataProvider>
        </>
    )
}