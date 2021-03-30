import React, { useState, useEffect } from 'react';

function JobsList() {
    const [jobs, setJobs] = useState([])

    console.log(jobs ? jobs[0] : 'empty')

    useEffect(() => {
        fetch('https://cors.bridged.cc/https://jobs.github.com/positions.json')
            .then((res) => res.json())
            .then((data) => setJobs(data))
    }, [])

    return (
        <div className="jobs">
            {jobs.map(job => (
                <div key={job.id} className="card">
                    {job.company_logo &&
                        <div className="card__logo">
                            <img src={job.company_logo} alt="company-logo" />
                        </div>
                    }
                    <p className="card__information">5h ago <span className="card__dot" /> {job.type}</p>
                    <p className="card__title">{job.title}</p>
                    <p className="card__company-name">{job.company}</p>
                    <p className="card__location">{job.location}</p>
                </div>
            ))}
        </div>
    );
}

export default JobsList;