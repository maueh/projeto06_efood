import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Food } from '../../components/Food'

export enum ShoppingStage {
  Cart,
  Delivery,
  Payment,
  Completed
}

type CartState = {
  items: Food[]
  isOpen: boolean
  tabStage: ShoppingStage
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  tabStage: ShoppingStage.Cart
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Food>) => {
      const game = state.items.find((item) => item.id === action.payload.id)
      if (!game) {
        state.items.push(action.payload)
      } else {
        alert('Item já foi adicionado!')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    cleanCart: (state) => {
      state.items = []
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    nextStage: (state) => {
      state.tabStage = state.tabStage + 1
    },
    previousStage: (state) => {
      state.tabStage = state.tabStage - 1
    },
    goToStage: (state, action: PayloadAction<ShoppingStage>) => {
      state.tabStage = action.payload
    }
  }
})

export const {
  add,
  open,
  close,
  remove,
  nextStage,
  previousStage,
  goToStage,
  cleanCart
} = cartSlice.actions
export default cartSlice.reducer
