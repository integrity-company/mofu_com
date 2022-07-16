<script setup lang="ts">
import ProductItem from "../../molecules/ProductItem/index.vue";

type ProductItemProps = {
  title: string;
  description: string;
  url: string;
  lastUpdate: number;
}[];

const props = defineProps({
  data: Array,
});
</script>

<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div v-for="item in props.data" :key="item">
      <div class="product-item">
        <ProductItem :data="item" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-item:hover {
  border: 1px solid red;
  cursor: pointer;
}
</style>
