<script setup lang="ts">
import { ProductStore } from '../../js/store/ProductStore/index'
import { productStoreKey } from '../../js/injectionKeys/index'
import { provide } from 'vue'

provide(productStoreKey, new ProductStore())
</script>

<template>
  <router-view></router-view>
</template>

<style></style>
