<script setup lang="ts">
import ProductItem from '../../molecules/ProductItem/index.vue'
import Accordion from '../../molecules/Accordion/index.vue'
import { useRouter } from 'vue-router'
import { PropType } from 'vue'

type ProductItemProps = {
  _id: string
  title: string
  description: string
  url: string
  price: number
  lastUpdate: number
}[]

const props = defineProps({
  data: Array as PropType<ProductItemProps>,
})
const router = useRouter()
const goToItemDetail = (_id: string) => {
  router.push(`/products/detail/${_id}`)
}
</script>

<template>
  <div class="notification">
    <div class="accordion" id="accordionExample">
      <Accordion :hasShow="true">
        <template #title>商品購入のお知らせ</template>
        <template #description
          >返金・返品は受け付けておりません。必ず各商品の注意書きをご確認の上、ご購入をしてください。</template
        >
      </Accordion>
    </div>
  </div>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div v-for="item in props.data" :key="item._id">
      <div class="product-item" @click="goToItemDetail(item._id)">
        <ProductItem :data="item" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.notification {
  margin: 16px 0px;
}
.product-item:hover {
  border: 1px solid rgb(251, 178, 178);
  cursor: pointer;
}
</style>
