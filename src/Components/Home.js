import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

//Components
import Character from './Character';
const uri = 'https://rickandmortyapi.com/api/character/?page=1&name=';
const stateUri = '&status=';

function Home() {

    const [state, setState] = useState();

    const { register, handleSubmit } = useForm();

    const fetch = async (name, status) => {
        const resp = await axios.get(uri + name + stateUri + status)
        setState(resp.data.results);
    }

    const fetchAll = async (name) => {
        const resp = await axios.get(uri + name)
        setState(resp.data.results);
    }

    const onSubmit = data => {
        if (data.status === 'all')
            fetchAll(data.name)
        else
            fetch(data.name, data.status);
    }

    return (
        <section>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} />

                <select {...register("status")} defaultValue="all">
                    <option value="all">All</option>
                    <option value="alive">Alive</option>
                    <option value="dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </select>

                <input value="filter" type="submit" />
            </form>

            {!state && <h2>No hay datos para mostrar</h2>}

            {state?.map(i => {
                return (
                    <Character img={i.image} name={i.name} status={i.status} specie={i.species} />
                );

            })
            }

        </section>
    );
}
export default Home;