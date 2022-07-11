<script setup lang="ts">
import { reactive } from "vue";

const title = "MOFU";

const states = reactive({
  imgPosition: "",
  textPosition: "",
});
const goToNextPage = () => {
  console.log("ページ遷移");
  states.imgPosition = !states.imgPosition ? "ml-reverse-100" : "";
};
</script>

<template>
  <div class="container">
    <div class="title" :class="states.imgPosition">
      <button @click="goToNextPage">{{ title }}</button>
    </div>
    <div class="top-image" :class="states.imgPosition">
      <img src="../../../../../public/top_image.png" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #ff880037;
}
.title button {
  font-size: 80px;
  color: transparent;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0);
  background: repeating-linear-gradient(
    -45deg,
    #ee7752,
    #e73c7e,
    #23a6d5,
    #23d5ab
  );
  -webkit-background-clip: text;
  background-size: 400% 400%;
  letter-spacing: 0.25rem;
  font-family: "Spartan", sans-serif;
  animation: AnimationName 10s ease infinite;
}
.top-image {
  position: absolute;
  filter: brightness(107%) opacity(80%);
  width: 70vw;
  z-index: -1;
  & img {
    width: 100%;
  }
}
.ml-reverse-100 {
  animation: FadeoutImage 1.5s ease;
  animation-fill-mode: forwards;
}

@keyframes AnimationName {
  0% {
    background-position: 0% 50%;
    letter-spacing: 2.25rem;
  }
  50% {
    background-position: 100% 50%;
    letter-spacing: 0.25rem;
  }
  100% {
    background-position: 0% 50%;
    letter-spacing: 2.25rem;
  }
}
@keyframes FadeoutImage {
  from {
    opacity: 0.8;
  }
  to {
    opacity: 0;
  }
}
</style>
