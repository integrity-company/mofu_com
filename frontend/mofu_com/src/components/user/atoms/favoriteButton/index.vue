<script setup lang="ts"></script>

<style lang="scss" scoped>
.product_favorite {
  width: 40px;
  height: 100%;
  border: solid 1px #e5e5e5;
  border-radius: 2px;
  cursor: pointer;
}
.product_favorite:hover::after {
  color: #fe4c50;
}
.product_favorite::after {
  font-family: 'FontAwesome';
  content: '\f08a';
  font-size: 14px;
}
.product_favorite.active::after {
  content: '\f004';
  color: #fe4c50;
}
</style>

<template>
  <div
    class="product_favorite d-flex flex-column align-items-center justify-content-center"
  ></div>
</template>
