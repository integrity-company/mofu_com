<script setup lang="ts">
import ItemDetailContents from '../../organisms/ItemDetailContents/index.vue'
import NavBar from '../../molecules/NavBar/index.vue'
import { useRoute } from 'vue-router'
import { useItemDetailActions, useItemDetailStates } from '.'
import { ProductStore } from '../../../../js/store/ProductStore/index'
import { productStoreKey } from '../../../../js/injectionKeys/index'
import { inject } from 'vue'

const itemDetailStore = inject<ProductStore>(productStoreKey) as ProductStore

const route = useRoute()
const itemId = String(route.params.id)
const states = useItemDetailStates()
const actions = useItemDetailActions(states, itemDetailStore, itemId)
</script>

<style lang="scss" scoped></style>

<template>
  <div class="top-nav">
    <NavBar />
  </div>
  <ItemDetailContents :data="states.itemDetail" />
</template>
