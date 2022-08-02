<script setup lang="ts">
import Breadcrumb from '../../molecules/Breadcrumb/index.vue'
import ItemInfomation from '../ItemInfomation/index.vue'
import { ProductList } from '../../../../js/type/user/general/products'
import { PropType } from 'vue'

type ItemInfomationEdmis = {
  (e: 'showModal', value: string): void
}

const props = defineProps({
  data: {
    type: Object as PropType<ProductList>,
    reuqired: true,
  },
})
const emit = defineEmits<ItemInfomationEdmis>()
const showModal = (itemId: string) => {
  emit('showModal', itemId)
}
</script>

<template>
  <div class="container">
    <div class="mt-5">
      <Breadcrumb />
    </div>
    <div>
      <ItemInfomation
        :data="(props.data as ProductList)"
        @show-modal="showModal"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
