function fetchData<T>(url: string): Promise<T> {
  return fetch(`http://localhost:9000/${url}`)
      .then(
        response => {
          return response.json()
        }
      )
      .then(function(data) {
        return data
      })
      .catch(e => {
        throw new Error(e)
      })
}

export default fetchData
