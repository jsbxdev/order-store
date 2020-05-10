<template>
  <div v-if="orders" class="order-list">
    <v-card v-for="order in orders" :key="order.id" class="mx-auto mb-2">
      <v-card-title>
        {{ order.orderName }}
      </v-card-title>
      <v-card-text>
        <p v-for="(item, index) in order.items" :key="index">
          {{ index }}: {{ item }}
        </p>
        <p>randomRef: {{ order.randomRef }}</p>
        <p>objectWithRef: {{ order.objectWithRef }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="success" @click="updateText(order.id)">update</v-btn>
        <v-spacer></v-spacer>
        <v-btn text @click="deleteOrder(order.id)">remover</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  computed: {
    orders() {
      return this.$store.getters['orders/getOrderList']
    }
  },
  created() {
    this.$store.dispatch('orders/bindOrders')
  },
  methods: {
    deleteOrder(orderId) {
      this.$store.dispatch('orders/deleteOrder', orderId)
    },
    updateText(orderId) {
      this.$store.dispatch('orders/updateOrder', orderId)
    }
  }
}
</script>

<style></style>
