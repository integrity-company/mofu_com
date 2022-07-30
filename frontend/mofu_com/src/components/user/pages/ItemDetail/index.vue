<script setup lang="ts">
import ItemDetailContents from "../../organisms/ItemDetailContents/index.vue";
import NavBar from "../../molecules/NavBar/index.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const itemId = Number(route.params.id);
</script>

<style lang="scss" scoped></style>

<template>
  <div class="top-nav">
    <NavBar />
  </div>
  <ItemDetailContents />
</template>
