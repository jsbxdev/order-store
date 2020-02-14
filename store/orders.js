import { firestoreAction } from 'vuexfire'

import { ordersRef, itemsRef } from '~/firebase'

export const state = () => ({
  orders: false
})

export const getters = {
  getOrderList: (state) => state.orders
}

export const actions = {
  bindOrders: firestoreAction((context) => {
    context.bindFirestoreRef('orders', ordersRef)
  }),
  addOrder: (context, orderName) => {
    ordersRef.add({
      orderName: Math.round(new Date().getTime() / 1000),
      randomRef: itemsRef.doc('cNIoE5S5Mn8Q8fF4aq1v'),
      items: [
        'hello',
        itemsRef.doc('cNIoE5S5Mn8Q8fF4aq1v'),
        { itemRef: itemsRef.doc('cNIoE5S5Mn8Q8fF4aq1v') },
        { test: 'oi' },
        itemsRef.doc('cNIoE5S5Mn8Q8fF4aq1v')
      ]
    })
  },
  deleteOrder: (context, orderId) => {
    ordersRef.doc(orderId).delete()
  },
  updateOrder: (context, orderId) => {
    // eslint-disable-next-line
    console.clear()
    ordersRef.doc(orderId).update({
      orderName: Math.round(new Date().getTime() / 1000)
    })
  }
}
