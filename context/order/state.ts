'use client'
import { IOrderDetailsValues, ITrendZoneAddressData } from '@/types/order'
import {
  getTrendZoneOfficesByCityFx,
  order,
  setCashPaymentTb,
  setChosenCourierAddressData,
  setChosenPickupAddressData,
  setCourierAddressData,
  setCourierTab,
  setMapInstance,
  setOnlinePaymentTb,
  setOrderDetailsValues,
  setPickupTab,
  setShouldLoadTrendZoneData,
  setShouldShowCourierAddressData,
} from '.'

export const $trendZoneDataByCity = order
  .createStore<ITrendZoneAddressData[]>([])
  .on(getTrendZoneOfficesByCityFx.done, (_, { result }) => result)

export const $pickupTab = order
  .createStore<boolean>(true)
  .on(setPickupTab, (_, value) => value)

export const $courierTab = order
  .createStore<boolean>(false)
  .on(setCourierTab, (_, value) => value)

export const $mapInstance = order
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  .createStore<any>({})
  .on(setMapInstance, (_, map) => map)

export const $shouldLoadTrendZoneData = order
  .createStore(false)
  .on(setShouldLoadTrendZoneData, (_, value) => value)

export const $chosenPickupAddressData = order
  .createStore<Partial<ITrendZoneAddressData>>({})
  .on(setChosenPickupAddressData, (_, value) => value)

export const $chosenCourierAddressData = order
  .createStore<Partial<ITrendZoneAddressData>>({})
  .on(setChosenCourierAddressData, (_, value) => value)

export const $shouldShowCourierAddressData = order
  .createStore(false)
  .on(setShouldShowCourierAddressData, (_, value) => value)

export const $courierAddressData = order
  .createStore<ITrendZoneAddressData>({} as ITrendZoneAddressData)
  .on(setCourierAddressData, (_, value) => value)

export const $onlinePaymentTab = order
  .createStore<boolean>(true)
  .on(setOnlinePaymentTb, (_, value) => value)

export const $cashPaymentTab = order
  .createStore<boolean>(false)
  .on(setCashPaymentTb, (_, value) => value)

export const $orderDetailsValues = order
  .createStore<IOrderDetailsValues>({} as IOrderDetailsValues)
  .on(setOrderDetailsValues, (_, value) => value)
