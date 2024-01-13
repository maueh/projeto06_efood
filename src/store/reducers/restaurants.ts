import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Restaurant } from '../../components/Restaurant'

type ResturantsState = {
  items: Restaurant[]
}

const initialState: ResturantsState = {
  items: []
}

const cartSlice = createSlice({
  name: 'restaurant-list',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Restaurant[]>) => {
      // /state.items.push(action.payload)
    }
  }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer
