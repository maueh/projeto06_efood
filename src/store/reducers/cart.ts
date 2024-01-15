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
  resetPurchase: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  tabStage: ShoppingStage.Cart,
  resetPurchase: false
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
    goToStage: (state, action: PayloadAction<ShoppingStage>) => {
      state.tabStage = action.payload
    },
    setResetPurchase: (state, action: PayloadAction<boolean>) => {
      state.resetPurchase = action.payload
    }
  }
})

export const {
  add,
  open,
  close,
  remove,
  goToStage,
  cleanCart,
  setResetPurchase
} = cartSlice.actions
export default cartSlice.reducer
