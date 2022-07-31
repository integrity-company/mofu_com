<script setup lang="ts">
import Breadcrumb from '../../molecules/Breadcrumb/index.vue'
import ItemInfomation from '../ItemInfomation/index.vue'
import { ProductList } from '../../../../js/type/user/general/products'
import { PropType } from 'vue'

const props = defineProps({
  data: {
    type: Object as PropType<ProductList>,
    reuqired: true,
  },
})
</script>

<template>
  <div class="container">
    <div class="mt-5">
      <Breadcrumb />
    </div>
    <div>
      <ItemInfomation :data="props.data" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
