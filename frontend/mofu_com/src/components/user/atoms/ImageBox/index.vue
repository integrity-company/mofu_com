<script setup lang="ts">
const props = defineProps({
  url: {
    type: String,
  },
  width: {
    type: Number,
    default: 200,
  },
  height: {
    type: Number,
    default: 200,
  },
});
</script>

<style lang="scss" scoped>
.image-box {
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div>
    <img
      :src="props.url"
      alt=""
      class="image-box"
      :width="props.width"
      :height="props.height"
    />
  </div>
</template>
