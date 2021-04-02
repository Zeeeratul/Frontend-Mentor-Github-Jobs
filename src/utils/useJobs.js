import {useQuery, useInfiniteQuery, queryCache} from 'react-query'
import {client} from './api-client'

function useJobs(query) {
    const { description, location, full_time, page = 1 } = query
    const pageParams = page ? `page=${page}&` : ''
    // const descriptionParams = description ? `description=${description}&` : ''
    // const locationParams = location ? `location=${location}&` : ''
    // const fullTimeParams = full_time ? `full_time=true` : ''
    // const queryString = 'positions.json?' + pageParams + descriptionParams + locationParams + fullTimeParams
    

    const result = useInfiniteQuery({
        // queryKey: ['jobs', { description, location, full_time }],
        queryKey: ['jobs'],
        queryFn: ({ pageParam = 1 }) =>
          client(`positions.json?page=${pageParam}`).then(data => data),
        //   client(queryString).then(data => data),
    })
    return {...result, jobs: result.data ?? []}
}

// const useJob(jobId) {
//     const { jobs } = useJobs()
// }

export { useJobs }