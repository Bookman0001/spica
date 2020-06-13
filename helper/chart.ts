import { TotalPrediction } from '../interface'

export const ToChartFromPredictionList = (list: TotalPrediction[]) => {
  return {
    labels: list.map((item) => item.date),
    datasets: [
      {
        label: '感染者数',
        data: list.map((item) => item.positive),
      },
    ],
  }
}
