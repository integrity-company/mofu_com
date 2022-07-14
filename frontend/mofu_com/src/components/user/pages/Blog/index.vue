<script setup lang="ts">
import NavBar from "../../molecules/NavBar/index.vue";
import BlogContents from "../../organisms/BlogContents/index.vue";
</script>

<template>
  <div class="top-nav">
    <NavBar />
  </div>
  <h2>Blogページ</h2>
  <div class="container">
    <BlogContents />
  </div>
</template>

<style lang="scss" scoped></style>
