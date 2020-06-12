export interface Prefecture {
  id: number
  nameJA: string
  nameEn: string
  lat: number
  lng: number
  population: number
  cases: number
  deaths: number
}

export interface TotalPrediction {
  date: string
  positive: number
  death: number
}
