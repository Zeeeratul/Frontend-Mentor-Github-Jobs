import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {ReactComponent as LoadingSpinner} from '../../assets/desktop/loading-circle.svg'

function JobIndex() {
    const { jobId } = useParams()
    const [state, setState] = useState({
        status: 'pending',
        data: null,
        error: null
    })
    const {data: job, status} = state

    const handleRedirectCompanyWebsite = () => {
        if (job.company_url)
            window.location.href = job.company_url
    }

    useEffect(() => {
        setState({ status: 'pending', data: null, error: null })

        fetch(`https://cors.bridged.cc/https://jobs.github.com/positions/${jobId}.json`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setState({ status: 'fulfilled', data: data })
            })
            .catch((err) => {
                console.log(err)
            })
    }, [jobId])

    if (status === 'pending') 
        return (
            <LoadingSpinner />
        )

    return (
        <main className="job">
            <div className="job-block">
                <div className="company">
                    <div className="company__logo">
                        <img src="https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcGVlIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--41e3b421681b09e96c8450eeffc6757cf600367b/Logo-verkstedt-292x300.png" alt="company__logo" />
                    </div>
                    <h3 className="company__name">{job.company}</h3>
                    <h6 className="company__site">{job.company_url}</h6>
                    <button onClick={() => handleRedirectCompanyWebsite()} className="button2 company__button">Company Site</button>
                </div>
                {/* <div className="apply">
                </div> */}
                <div className="apply">
                    <h3 className="apply__title">How to Apply</h3>
                    {/* {job.how_to_apply} */}
                </div>
            </div>
            <footer className="footer">
                <button className="button1 footer__button">Apply Now</button>
            </footer>
        </main>
    );
}

export default JobIndex;