import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurant } from '../components/Restaurant'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getAllRestaurantsData: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    }),

    getRestaurantData: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetAllRestaurantsDataQuery, useGetRestaurantDataQuery } = api

export default api
