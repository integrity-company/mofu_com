<script setup lang="ts">
import { inject } from 'vue'
import NavBar from '../../molecules/NavBar/index.vue'
import ProductListContent from '../../organisms/ProductListContents/index.vue'
import { useProductListStates, useProductListActions } from '.'

import { ProductStore } from '../../../../js/store/ProductStore'
import { productStoreKey } from '../../../../js/injectionKeys/index'

const productStore = inject<ProductStore>(productStoreKey) as ProductStore

const state = useProductListStates()
const actions = useProductListActions(state, productStore)
</script>

<template>
  <div class="top-nav">
    <NavBar />
  </div>
  <div class="container">
    <div class="page-title">
      <h2>商品リストページ</h2>
    </div>
    <ProductListContent :data="state.productList" />
  </div>
</template>

<style lang="scss" scoped>
.page-title {
  margin: 32px 0px;
}
</style>
