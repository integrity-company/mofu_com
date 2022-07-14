<script setup lang="ts">
import NavBar from "../../molecules/NavBar/index.vue";
import VideoLessonContents from "../../organisms/VideoLessonContents/index.vue";
</script>

<template>
  <div class="top-nav">
    <NavBar />
  </div>
  <h2>Video Lessonページ</h2>
  <div class="container">
    <VideoLessonContents />
  </div>
</template>

<style lang="scss" scoped></style>
