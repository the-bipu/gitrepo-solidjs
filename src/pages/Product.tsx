import { Component, createEffect, For } from 'solid-js';
import { repos, setUsername, username } from '../App';
import Card, { Repo } from '../components/Card';
import Nav from '../components/Nav';

const Product: Component = () => {

    const refetchWithUsername = (event: Event) => {
        event.preventDefault()
        const usernameInput = document.querySelector('#usernameInput') as HTMLInputElement
        setUsername(usernameInput.value)

        usernameInput.value = ''
    }

    return (
        <div class='w-full min-h-screen flex flex-col items-center pt-20'>
            <Nav />

            <div class='w-11/12 h-full flex flex-col'>
                <h2 class='text-3xl font-bold'>Get Data</h2>
                <form class='mt-3 flex flex-row gap-2' onSubmit={(event) => refetchWithUsername(event)}>
                    <input type="text" class='h-9 p-1 border border-black outline-none' id='usernameInput' placeholder='Your github id here...' required />

                    <button class='h-9 flex items-center justify-center border border-black px-3'>
                        Fetch
                    </button>
                </form>
                <h3 class='mt-4 font-bold text-xl mb-4'>Github Repositories of {username()}</h3>

                <For each={repos()}>
                    {(repo: Repo) => <Card repo={repo} />}
                </For>
            </div>
        </div>
    )
}

export default Product;