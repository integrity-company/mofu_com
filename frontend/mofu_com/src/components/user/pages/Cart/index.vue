<script setup lang="ts">
import NavBar from "../../molecules/NavBar/index.vue";
import CartContents from "../../organisms/CartContents/index.vue";
</script>

<template>
  <div class="top-nav">
    <NavBar />
  </div>
  <h2>カートページ</h2>
  <div class="container">
    <CartContents />
  </div>
</template>

<style lang="scss" scoped></style>
