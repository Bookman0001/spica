export const fetchPrefectureInfectionList = async () => {
  return await fetch(process.env.API_ENDPOINT + 'prefectures')
    .then((response) => {
      return response.json()
    })
    .catch(() => {
      return null
    })
}
