import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import MortGif from '../assets/morty.gif';

//Components
import Character from './Character';
const uri = 'https://rickandmortyapi.com/api/character/?page=1&name=';
const stateUri = '&status=';

function Home() {

    const [state, setState] = useState();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const fetch = async (name, status) => {
        const resp = await axios.get(uri + name + stateUri + status).then(res => res).catch(() => "no-data")
        if (resp === "no-data")
            setState(resp)
        else
            setState(resp.data.results);
    }

    const fetchAll = async (name) => {
        const resp = await axios.get(uri + name).then(res => res).catch(() => "no-data")
        if (resp === "no-data")
            setState(resp)
        else
            setState(resp.data.results);
    }

    const onSubmit = data => {
        if (data.status === 'all')
            fetchAll(data.name)
        else
            fetch(data.name, data.status);
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true })} />

                    <select {...register("status")} defaultValue="all">
                        <option value="all">All</option>
                        <option value="alive">Alive</option>
                        <option value="dead">Dead</option>
                        <option value="unknown">Unknown</option>
                    </select>

                    <input id="submitBtn" value="FILTER" type="submit" />

                </form>
                {errors.name && <h2 id="required-field">Wait, this field is required!</h2>}
            </div>

            {!state &&
                <div className="wait">
                    <div id="waitImg"></div>
                </div>
            }


            {state === 'no-data' &&
                <div className="no-data">
                    <h2>No results :(</h2>
                    <img src={MortGif} alt="mortyGif" />
                </div>
            }


            {state && state !== 'no-data' &&
                <div className="list">
                    {state.map(i => {
                        return (<Character key={i.name} img={i.image} name={i.name} status={i.status} specie={i.species} />)
                    }
                    )}
                </div>
            }

        </>
    );
}
export default Home;