<script setup lang="ts">
import ItemDetailContents from "../../organisms/ItemDetailContents/index.vue";
import NavBar from "../../molecules/NavBar/index.vue";
import { sampleData } from "../../../../js/data/sample_data";
import { useRoute } from "vue-router";

const route = useRoute();
const itemId = Number(route.params.id);
const filterData = sampleData.filter((data) => data.id === itemId)[0];
</script>

<style lang="scss" scoped></style>

<template>
  <div class="top-nav">
    <NavBar />
  </div>
  <ItemDetailContents :data="filterData" />
</template>
