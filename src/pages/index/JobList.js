import React from 'react';
import { useHistory } from 'react-router-dom'
import { calculateTimeSinceCreation } from '../../utils/calculateTimeSinceCreation';

function JobList({ jobs = [] }) {
    const history = useHistory()
    const handleRedirectJob = (jobId) => history.push(`/${jobId}`)

    return (
        <div className="job-list">
            {jobs.map(job => (
                <div key={job.id} className="card" onClick={() => handleRedirectJob(job.id)}>
                    {job.company_logo &&
                        <div className="card__logo">
                            <img src={job.company_logo} alt="company-logo" />
                        </div>
                    }
                    <p className="card__information">{calculateTimeSinceCreation(job.created_at)} <span className="card__dot" /> {job.type}</p>
                    <p className="card__title">{job.title}</p>
                    <p className="card__company-name">{job.company}</p>
                    <p className="card__location">{job.location}</p>
                </div>
            ))}
        </div>
    );
}

export default JobList;