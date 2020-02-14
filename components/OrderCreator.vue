<template>
  <div class="order-creator mb-4">
    <v-text-field
      id="orderCreatorTextField"
      ref="orderCreatorTextField"
      v-model="orderName"
      label="Name of order"
      @keyup.enter="createOrder"
    ></v-text-field>
    <v-btn block color="primary" @click="createOrder">create</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderName: ''
    }
  },
  methods: {
    createOrder() {
      // if (this.orderName) {
      this.$store.dispatch('orders/addOrder', this.orderName)
      this.orderName = ''
      // }
    }
  }
}
</script>

<style></style>
