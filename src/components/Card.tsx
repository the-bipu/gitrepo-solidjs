import { Component } from 'solid-js';

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

const Card: Component<Props> = ({ repo }) => {
    return (
        <div class='w-full h-auto flex flex-col mb-4 shadow p-4'>
            <div>&#11088; stars {repo.stargazers_count}</div>

            <div class='flex flex-col gap-2 w-auto'>

                <a href={repo.html_url} target='_blank' rel='noreferrer' class='font-normal text-2xl transition-all'><span class='font-bold hover:underline'>{repo.owner?.login}</span>/{repo.name}</a>

                <p class='text-base font-normal'>{repo.description}</p>

                <div>
                    <button class='px-4 py-1 w-auto border border-gray-200 rounded transition-all hover:bg-gray-100'>Save</button>
                </div>
            </div>
        </div>
    )
}

export default Card;