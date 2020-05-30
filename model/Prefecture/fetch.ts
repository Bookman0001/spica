export const fetchPrefectureInfectionList = async () => {
  return await fetch(process.env.API_ENDPOINT)
    .then((response) => {
      return response.json()
    })
    .catch((e) => {
      console.log(e)
      return null
    })
}
