<script setup lang="ts"></script>

<style lang="scss" scoped>
.add_to_cart_button {
  width: 100%;
  margin-left: 19px;
  font-size: 12px !important;
}
.red_button {
  display: -webkit-inline-box;
  display: -moz-inline-box;
  display: -ms-inline-flexbox;
  display: -webkit-inline-flex;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40px;
  background: #fe4c50;
  border-radius: 3px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.red_button:hover {
  background: #fe7c7f !important;
}
.red_button a {
  display: block;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  line-height: 40px;
  width: 100%;
  text-decoration: none;
}
</style>

<template>
  <div class="red_button add_to_cart_button">
    <a href="#"><slot /></a>
  </div>
</template>
