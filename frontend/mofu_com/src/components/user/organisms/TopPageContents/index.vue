<script setup lang="ts">
import IntroBanner from "../../molecules/IntroBanner/index.vue";
import NavBar from "../../molecules/NavBar/index.vue";
const mask = document.querySelector(".mask");
</script>

<template>
  <div class="top-nav">
    <NavBar />
  </div>
  <div class="intro-banner">
    <IntroBanner />
  </div>
  <!-- <div class="mask"></div> -->
  <!-- <div class="spotlight_swivel">
    <div class="lamp"></div>
  </div> -->
</template>

<style lang="scss" scoped>
:root {
  --mouse-x: 50%;
  --mouse-y: 50%;
}
.top-nav {
  z-index: 10;
}
.intro-banner {
  margin-top: -57px;
  z-index: 10;
}
.mask {
  z-index: -10;
  position: absolute;
  top: 56px;
  width: 100%;
  height: calc(100% - 56px);
  background-color: hsla(0, 0%, 0%, 0.9);

  mask: radial-gradient(
    circle at var(--mouse-x) var(--mouse-y),
    transparent 40px,
    black 150px
  );
  -webkit-mask: radial-gradient(
    circle at var(--mouse-x) var(--mouse-y),
    transparent 40px,
    black 150px
  );
}
// .mask::after {
//   width: 300px;
//   height: 400px;
//   content: "";
//   position: absolute;
//   left: calc(50% - 150px);
//   top: calc(50% - 150px);
//   border-radius: 50%;
//   background-color: #ffffff;
//   clip: rect(50vh, 100vh, 100vh, 50vh);
//   border: 10px solid red;
// }
.spotlight_swivel {
  position: absolute;
  display: flex;
  justify-content: center;
  top: -220vh;
  width: 100%;
  z-index: -10;
}
.lamp {
  width: 40vh;
  height: 320vh;
  background-image: radial-gradient(
    ellipse,
    rgba(255, 215, 122, 0.5),
    rgba(255, 215, 122, 0.2) 25%,
    rgba(255, 215, 122, 0) 50%
  );
  // border: 10px solid red;
  transform: perspective(70vh) rotateX(45deg);
  z-index: -10;
}
// .spotlight {
//   // border: 10px solid red;
//   opacity: 0.5;
//   transform: scale(1.5, 3);
//   position: absolute;
//   top: -20vh;
//   left: calc(50% - 75vh);
//   z-index: 10;
// }
// .spotlight::after {
//   border: 10px solid red;
//   content: "";
//   position: absolute;
//   top: 15vh;
//   background-image: radial-gradient(
//     ellipse closest-corner at 75% 75%,
//     rgba(255, 215, 122, 0.2),
//     rgba(255, 215, 122, 0)
//   );
//   border-radius: 100%;
//   width: 80vh;
//   height: 80vh;
//   clip: rect(50vh, 100vh, 100vh, 50vh);
//   transform: rotate(45deg);
// }
</style>
