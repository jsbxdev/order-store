import { firestoreAction } from 'vuexfire'

import { ordersRef } from '~/firebase'

export const state = () => ({
  orders: false
})

export const getters = {
  getOrderList: (state) => state.orders
}

export const actions = {
  bindOrders: firestoreAction((context) => {
    context.bindFirestoreRef('orders', ordersRef)
  })
}
