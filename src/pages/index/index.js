import React, { useState, useEffect } from 'react';
import SearchBar from './searchBar/';
import JobList from './JobList';
import {ReactComponent as LoadingSpinner} from '../../assets/desktop/loading-circle.svg';

function JobListIndex() {
    const [state, setState] = useState({
        status: 'pending',
        data: null,
        error: null
    })
    const {data: jobs, status} = state

    console.log(jobs ? jobs[0]: '')

    useEffect(() => {
        setState({ status: 'pending', data: null, error: null })

        fetch('https://cors.bridged.cc/https://jobs.github.com/positions.json')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setState({ status: 'fulfilled', data: data })
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    if (status === 'pending')
        return (
            <main className="jobs">
                <SearchBar />
                <LoadingSpinner className="jobs__loading-icon" />
            </main>
        )

    if (status === 'fulfilled')
        return (
            <main className="jobs">
                <SearchBar />
                <JobList jobs={jobs} />
                <button className="jobs__button button1">Load More</button>
            </main>
        )

    return (
        <p>not possible </p>
    );
}

export default JobListIndex;