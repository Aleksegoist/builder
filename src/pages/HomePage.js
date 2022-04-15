import axios from 'axios';
import React, { useState } from 'react';
import { ResumePage } from './ResumePage';


export const HomePage = () => {
    const [searchInput, setSearchInput] = useState('');
    const [repos, setRepos] = useState([]);

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }

    const handleClick = async () => {
        console.log(searchInput);

        try {
            const result = await axios(`https://api.github.com/users/${searchInput}/repos`);
            setRepos(result);
        } catch (err) {
            console.log(err)
        }

    }
    return (
        <>
            <div className='row'>
                <div className='col s6 offset-s3'>
                    <h1>Load repositories</h1>
                    <div className="card blue darken-3">
                        <div className="card-content white-text">
                            <span className="card-title">Find account from GitHub</span>
                            <div>
                                <div className="input-field">
                                    <input
                                        placeholder="Enter user Name"
                                        id="first_name"
                                        type="text"
                                        className='yellow-input'
                                        value={searchInput}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="first_name"></label>
                                </div>
                            </div>
                        </div>
                        <div className="card-action">
                            <button onClick={() => handleClick()}
                                className='btn yellow darken-4'>
                                SEARCH
                            </button>
                        </div>
                    </div>
                </div>
                <ResumePage repos={repos} />
            </div>
        </>
    )
}