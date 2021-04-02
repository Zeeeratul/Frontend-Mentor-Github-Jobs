import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { ReactComponent as LoadingSpinner } from '../../assets/desktop/loading-circle.svg';
import Main from './Main';
import Footer from './Footer';

function JobIndex() {
    const { jobId } = useParams()
    const [state, setState] = useState({
        status: 'pending',
        data: null,
        error: null
    })
    const {data: job, status} = state

    useEffect(() => {
        setState({ status: 'pending', data: null, error: null })

        fetch(`https://cors.bridged.cc/https://jobs.github.com/positions/${jobId}.json`)
            .then((res) => res.json())
            .then((data) => {
                setState({ status: 'fulfilled', data: data })
            })
            .catch((err) => {
                console.log(err)
            })
    }, [jobId])

    if (status === 'pending') 
        return (
            <LoadingSpinner className="loading-spinner" />
        )

    return (
        <>
            <Main job={job} />
            <Footer title={job?.title} company={job?.company} />
        </>
    );
}

export default JobIndex;