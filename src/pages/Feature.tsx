import { Component, createSignal, For } from 'solid-js';
import Card, { Repo } from '../components/Card';

const savedRepoInStore = JSON.parse(localStorage.getItem('savedRepos') || '[]')
const [savedRepo, setSavedRepo] = createSignal(savedRepoInStore as Repo[]);

const Feature: Component = () => {
    return (
        <div class='w-full min-h-screen flex flex-col items-center pt-20'>
            <div class='w-11/12 h-full flex flex-col'>
                <h2 class='text-3xl font-bold'>Get Data</h2>
                <h3 class='mt-4 font-bold text-xl mb-4'>Saved Github Repositories</h3>

                <For each={savedRepo()}>
                    {(repo: Repo) => <Card repo={repo} />}
                </For>
            </div>
        </div>
    )
}

export { savedRepo, setSavedRepo }
export default Feature;