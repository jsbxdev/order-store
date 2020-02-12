<template>
  <div v-if="orders" class="order-list">
    <v-card></v-card>
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
  }
}
</script>

<style></style>
