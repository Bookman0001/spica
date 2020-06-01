import { fetchPrefectureInfectionList } from './fetch'

interface Response {
  id: number
  name_ja: string
  name_en: string
  lat: number
  lng: number
  population: number
  cases: number
  deaths: number
}

export const getPrefectureList = async () => {
  const prefectureList: Response[] = await fetchPrefectureInfectionList()
  return prefectureList.map((item) => {
    return {
      id: item.id,
      nameJA: item.name_ja,
      nameEn: item.name_en,
      lat: item.lat,
      lng: item.lng,
      population: item.population,
      cases: item.cases,
      deaths: item.deaths,
    }
  })
}
