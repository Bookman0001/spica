export const fetchTotalPredictionList = async () => {
  return await fetch(process.env.API_ENDPOINT + 'total?predict=true')
    .then((response) => {
      return response.json()
    })
    .catch(() => {
      return null
    })
}
