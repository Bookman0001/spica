export type Prefecture = {
  id: number
  nameJA: string
  nameEn: string
  lat: number
  lng: number
  population: number
  cases: number
  deaths: number
}

export type TotalPrediction = {
  date: string
  positive: number
  death: number
}
