<script setup lang="ts">
import ItemDetailContents from '../../organisms/ItemDetailContents/index.vue'
import NavBar from '../../molecules/NavBar/index.vue'
import { useRoute, useRouter } from 'vue-router'
import { useItemDetailActions, useItemDetailStates } from '.'
import { ProductStore } from '../../../../js/store/ProductStore/index'
import { productStoreKey } from '../../../../js/injectionKeys/index'
import { inject } from 'vue'
import Modal from '../../molecules/Modal/index.vue'

const itemDetailStore = inject<ProductStore>(productStoreKey) as ProductStore

const route = useRoute()
const router = useRouter()
const itemId = String(route.params.id)
const states = useItemDetailStates()
const actions = useItemDetailActions(states, itemDetailStore, itemId, router)
</script>

<style lang="scss" scoped></style>

<template>
  <div class="top-nav">
    <NavBar />
  </div>
  <ItemDetailContents
    :data="states.itemDetail"
    @show-modal="actions.showModal"
  />
  <!-- <Modal v-if="states.showModal"> -->
  <Modal @primary="actions.goToCart">
    <template #title>商品追加完了</template>
    <template #body>ここはbody</template>
    <template #primary-btn>カートページへ</template>
    <template #secondary-btn>閉じる</template>
  </Modal>
</template>
