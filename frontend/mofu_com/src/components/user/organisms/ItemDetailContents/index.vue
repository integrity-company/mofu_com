<script setup lang="ts">
import Breadcrumb from "../../molecules/Breadcrumb/index.vue";
import ItemInfomation from "../ItemInfomation/index.vue";

const props = defineProps({
  data: Object,
});
</script>

<template>
  <div class="container">
    <div class="mt-5">
      <Breadcrumb />
    </div>
    <div>
      <ItemInfomation :data="props.data" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
