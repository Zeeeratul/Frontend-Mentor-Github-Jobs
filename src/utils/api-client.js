const apiURL = 'https://cors.bridged.cc/https://jobs.github.com'

async function client(
  endpoint,
) {
  const config = {
    method: 'GET',
  }

  return window.fetch(`${apiURL}/${endpoint}`, config).then(async response => {
    // if (response.status === 401) {
    //   queryCache.clear()
    //   // refresh the page for them
    //   window.location.assign(window.location)
    //   return Promise.reject({message: 'Please re-authenticate.'})
    // }
    const data = await response.json()
    if (response.ok) {
      return data
    } else {
      return Promise.reject(data)
    }
  })
}

export {client}
