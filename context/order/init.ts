import { sample } from 'effector'
import {
  getTrendZoneOfficesByCity,
  getTrendZoneOfficesByCityFx,
  makePayment,
  makePaymentFx,
} from '.'

sample({
  clock: getTrendZoneOfficesByCity,
  source: {},
  fn: (_, data) => data,
  target: getTrendZoneOfficesByCityFx,
})

sample({
  clock: makePayment,
  source: {},
  fn: (_, data) => data,
  target: makePaymentFx,
})
