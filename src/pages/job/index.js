import React from 'react';
import { useJob } from '../../utils/useJobs';
import { useParams } from "react-router-dom";
import { ReactComponent as LoadingSpinner } from '../../assets/desktop/loading-circle.svg';
import Main from './Main';
import Footer from './Footer';

function JobIndex() {
    const { jobId } = useParams()
    const {
        job,
        isLoading,
        isSuccess,
    } = useJob(jobId)

    if (isLoading) 
        return (
            <LoadingSpinner className="loading-spinner" />
        )
    
    if (isSuccess)
        return (
            <>
                <Main job={job} />
                <Footer title={job?.title} company={job?.company} />
            </>
        )

    return (
        <p>error</p>
    );
}

export default JobIndex;