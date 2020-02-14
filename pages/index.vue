<template>
  <div>
    <order-creator></order-creator>
    <order-list></order-list>
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
