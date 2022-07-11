<script setup lang="ts">
import IntroBanner from "../../molecules/IntroBanner/index.vue";
import NavBar from "../../molecules/NavBar/index.vue";
</script>

<template>
  <NavBar />
  <div class="intro-banner">
    <IntroBanner />
  </div>
</template>

<style lang="scss" scoped>
.intro-banner {
  margin-top: -57px;
}
</style>
