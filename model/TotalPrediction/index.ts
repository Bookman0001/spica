import { fetchTotalPredictionList } from './fetch'

interface Response {
  date: string
  positive: number
  death: number
}

export const getTotalPredictionList = async () => {
  const totalPredictionList: Response[] = await fetchTotalPredictionList()
  return totalPredictionList.map((item) => {
    return {
      date: item.date,
      positive: item.positive,
      death: item.death,
    }
  })
}
