<template>
  <div class="order-creator">
    <v-text-field
      id="orderCreatorTextField"
      ref="orderCreatorTextField"
      v-model="orderName"
      label="Name of order"
      @keyup.enter="createOrder"
    ></v-text-field>
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
      console.log(this.orderName)
      this.$refs.orderCreatorTextField.$el.value = ''
    }
  }
}
</script>

<style></style>
