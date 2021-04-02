import React, { useState, useEffect } from 'react';
import SearchBar from './searchBar/';
import JobList from './JobList';
import { useHistory } from 'react-router-dom'
import { calculateTimeSinceCreation } from '../../utils/calculateTimeSinceCreation';
import {ReactComponent as LoadingSpinner} from '../../assets/desktop/loading-circle.svg';
import { useJobs } from '../../utils/useJobs'
import {useQuery, useInfiniteQuery, queryCache} from 'react-query'
import {client} from '../../utils/api-client'

function JobListIndex() {
    const [requestOptions, setRequestOptions] = useState({})
    const [page, setPage] = useState(1)
    const history = useHistory()
    const handleRedirectJob = (jobId) => history.push(`/${jobId}`)


    const fetchJobs = (context) => {
        console.log('context', context);
        return client(`positions.json?page=${1}`)

    }

    const {
        data: jobs,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        isLoading,
        isSuccess,
        status,
    } = useInfiniteQuery('jobs', fetchJobs, {
        getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    })




    const fetchMoreJobs = () => {
        const newPage = page + 1
        setPage(newPage)
        // fetchNextPage({ page: newPage })
        fetchNextPage({ test: 'tegs'})
    }

    // console.log(jobs)
    // const nextPage = () => {
    //     fetchNextPage(page + 1)
    // }



    // console.log(getNextPageParam)

    if (isLoading) {
        // // If user ask for more jobs
        // if (jobs && jobs.length > 0) {
        //     return (
        //         <main className="jobs">
        //             <SearchBar setRequestOptions={setRequestOptions} />
        //             <JobList jobs={jobs} />
        //             <LoadingSpinner className="jobs__loading-icon" />
        //         </main>  
        //     )
        // }
        // On page load
        return (
            <main className="jobs">
                <SearchBar setRequestOptions={setRequestOptions} />
                <LoadingSpinner className="jobs__loading-icon" />
            </main>  
        )
    }

    if (isSuccess)
        return (
            <main className="jobs">
                <SearchBar setRequestOptions={setRequestOptions} />
                <div className="job-list">
                    {jobs && jobs.pages.map((page, index) => (
                        <React.Fragment key={`page_${index}`}>
                            {page.map(job => (
                                <div key={job.id} className="card" 
                                onClick={() => handleRedirectJob(job.id)}
                                >
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
                        </React.Fragment>
                        )
                    )}
                </div>

                {/* <JobList jobs={jobs} /> */}
                <button onClick={() => fetchMoreJobs()} className="jobs__button button1">Load More</button>
            </main>  
        )

    return (
        <p>not possible </p>
    );
}

export default JobListIndex;