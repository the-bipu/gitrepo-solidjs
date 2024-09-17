import { Component } from 'solid-js';
import { savedRepo, setSavedRepo } from '../pages/Feature';

export type Repo = {
    id: string
    html_url: string
    name: string
    description: string
    stargazers_count: string
    owner: {
        login: string
    }
}

interface Props {
    repo: Repo
}

const saveRepo = (repo: Repo) => {
    setSavedRepo([repo, ...savedRepo()])
    localStorage.setItem('savedRepos', JSON.stringify(savedRepo()))
}

const unsaveRepo = (repoId: string) => {
    const nextState = savedRepo()?.filter((item) => item.id !== repoId)
    setSavedRepo(nextState)
    localStorage.setItem('savedRepos', JSON.stringify(savedRepo()))
}

const repoIsSaved = (repoId: string) => {
    const repo = savedRepo()?.filter((item) => item.id === repoId)
    return repo?.length > 0
}

const Card: Component<Props> = ({ repo }) => {
    return (
        <div class='w-full h-auto flex flex-col mb-4 shadow p-4'>
            <div>&#11088; stars {repo.stargazers_count}</div>

            <div class='flex flex-col gap-2 w-auto'>

                <a href={repo.html_url} target='_blank' rel='noreferrer' class='font-normal text-2xl transition-all'><span class='font-bold hover:underline'>{repo.owner?.login}</span>/{repo.name}</a>

                <p class='text-base font-normal'>{repo.description}</p>

                <div>
                    {repoIsSaved(repo.id) ? (
                        <button class='px-4 py-1 w-auto border border-gray-200 rounded transition-all hover:bg-gray-100' onClick={() => unsaveRepo(repo.id)}>Unsave</button>
                    ) : (
                        <button class='px-4 py-1 w-auto border border-gray-200 rounded transition-all hover:bg-gray-100' onClick={() => saveRepo(repo)}>Save</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card;