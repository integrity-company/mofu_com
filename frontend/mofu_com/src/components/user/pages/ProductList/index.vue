<script setup lang="ts">
import NavBar from "../../molecules/NavBar/index.vue";
import ProductListContent from "../../organisms/ProductListContents/index.vue";
import { sampleData } from "./sample_data";
</script>

<template>
  <div class="top-nav">
    <NavBar />
  </div>
  <div class="container">
    <h2>商品リストページ</h2>
    <ProductListContent :data="sampleData" />
  </div>
</template>

<style lang="scss" scoped></style>
