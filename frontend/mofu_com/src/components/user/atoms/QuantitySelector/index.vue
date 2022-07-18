<script setup lang="ts"></script>

<style lang="scss" scoped>
.quantity_selector {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 132px;
  height: 100%;
  border: solid 1px #e5e5e5;
  margin-left: 29px;
}
.quantity_selector span {
  font-weight: 500;
  color: #232530;
}
.plus,
.minus {
  padding-left: 14px;
  padding-right: 14px;
  cursor: pointer;
}
.plus:hover,
.minus:hover {
  color: #b5aec4;
}
</style>

<template>
  <div class="d-flex flex-column flex-sm-row align-items-sm-center">
    <span>Quantity:</span>
    <div class="quantity_selector">
      <span class="minus"><i class="fa fa-minus" aria-hidden="true"></i></span>
      <span id="quantity_value">1</span>
      <span class="plus"><i class="fa fa-plus" aria-hidden="true"></i></span>
    </div>
  </div>
</template>
