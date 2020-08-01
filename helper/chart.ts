import { useTranslation } from 'react-i18next'

import 'constants/locales/I18n'
import { TotalPrediction } from 'interface'

export const ToChartFromPredictionList = (list: TotalPrediction[]) => {
  const { t } = useTranslation()
  return {
    labels: list.map((item) => item.date),
    datasets: [
      {
        label: t('感染者予測データ'),
        data: list.map((item) => item.positive),
        borderColor: '#ff6347',
        fill: false,
      },
      {
        label: t('死亡者数'),
        data: list.map((item) => item.death),
        borderColor: '#000000',
        fill: false,
      },
    ],
  }
}
