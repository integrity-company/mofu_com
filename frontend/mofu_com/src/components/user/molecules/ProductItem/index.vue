<script setup lang="ts">
import { ref, useCssModule } from "vue";

const props = defineProps({
  data: Object,
});
const css = useCssModule("css");
const imgClass = ref<string>(css.cus);
</script>

<style lang="scss" module="css" scoped>
.cus {
  height: 200px;
  background-image: url(imgUrl);
  border: 1px solid red;
}
</style>

<template>
  <div class="col">
    <div class="card h-100">
      <img
        :src="props.data.url"
        class="card-img-top"
        alt="..."
        style="height: auto"
      />

      <div class="card-body">
        <h5 class="card-title">{{ props.data.title }}</h5>
        <p class="card-text">
          {{ props.data.description }}
        </p>
      </div>
      <div class="card-footer">
        <small class="text-muted"
          >Last updated {{ props.data.lastUpdate }} mins ago</small
        >
      </div>
    </div>
  </div>
</template>
