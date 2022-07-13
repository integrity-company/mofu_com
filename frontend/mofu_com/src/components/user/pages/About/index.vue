<script setup lang="ts">
import NavBar from "../../molecules/NavBar/index.vue";
</script>

<template>
  <NavBar />
  <div>
    <div class="about">
      <p>ABOUT</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
}
.about {
  width: 100%;
  height: calc(100vh - 56px);
  animation: FadeoutImage 1.5s ease;
  animation-fill-mode: forwards;
  display: flex;
  justify-content: center;
  align-items: center;
}
.about p {
  position: absolute;
  font-size: 5rem;
  color: transparent;
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
@keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes FadeoutImage {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
