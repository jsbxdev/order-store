<template>
  <div>
    <order-list></order-list>
    <order-creator></order-creator>
  </div>
</template>

<script>
import OrderList from '~/components/OrderList.vue'
import OrderCreator from '~/components/OrderCreator.vue'
export default {
  components: {
    OrderList,
    OrderCreator
  }
}
</script>
