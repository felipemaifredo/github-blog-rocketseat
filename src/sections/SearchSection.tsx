import { IoSearch } from "react-icons/io5"
import { MdClear } from "react-icons/md"
import { useContextSelector } from "use-context-selector"
import { GithubDataContext } from "../contexts/githubContext"
import { useState } from "react"

export const SearchSection = () => {
    const [ termSearch, setTermSearch ] = useState("")

    const githubIssuesData = useContextSelector(GithubDataContext, (context) => {
        return context.githubIssuesData
    })

    const fetchGithubIssuesData = useContextSelector(GithubDataContext, (context) => {
        return context.fetchGithubIssuesData
    })

    function handleSubmit(e: React.MouseEvent<HTMLFormElement>) {
        e.preventDefault()
        fetchGithubIssuesData(termSearch)
    }

    return (
        <section className="search-section">
            <div>
                <p>Publicações</p>
                {githubIssuesData.length > 0 &&
                    <p>{githubIssuesData.length} Publicações</p>
                }
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Buscar conteúdo"
                    onChange={ (e) => setTermSearch(e.target.value) }
                    value={termSearch}
                />
                {termSearch.length > 0 && (
                    <div className="btns-box">
                        <button 
                            type="button"
                            onClick={() => setTermSearch("")}
                            > 
                                <MdClear /> 
                                Limpar
                        </button>
                        <button 
                            type="submit"
                        > 
                            <IoSearch />
                            Pesquisar 
                        </button>
                    </div>
                )}
            </form>
        </section>
    )
}