<script setup lang="ts">
import ImageBox from "../../atoms/ImageBox/index.vue";
import QuantitySelector from "../../atoms/QuantitySelector/index.vue";
import Button from "../../atoms/Button/index.vue";
import FavoriteButton from "../../atoms/favoriteButton/index.vue";
import Seperate from "../../atoms/Seperate/index.vue";
import SlideBanner from "../../atoms/SlideBanner/index.vue";
import Footer from "../../molecules/Footer/index.vue";

const props = defineProps({
  data: Object,
});
</script>

<style lang="scss" scoped>
.product_price {
  display: inline-block;
  font-size: 24px;
  color: #fe4c50;
  font-weight: 500;
  line-height: 30px;
  margin-top: 2px;
}
.quantity {
  width: 100%;
  height: 40px;
  margin-top: 23px;
}
.seperate {
  margin: 64px 0px;
}
</style>

<template>
  <div class="row row-cols-1 row-cols-md-2 g-4 mt-4">
    <div>
      <ImageBox :url="props.data.url" />
    </div>
    <div>
      <h1>{{ props.data.title }}</h1>
      <p>{{ props.data.description }}</p>
      <div class="product_price">
        <p>¥{{ props.data.price }}</p>
      </div>
      <div class="quantity d-flex">
        <QuantitySelector />
        <Button>add to cart</Button>
        <div>
          <FavoriteButton />
        </div>
      </div>
    </div>
  </div>

  <div class="seperate">
    <Seperate />
  </div>

  <div>
    <ImageBox :url="props.data.url" />
  </div>

  <div class="seperate">
    <Seperate />
  </div>

  <h2>Recommend</h2>

  <SlideBanner />

  <Footer />
</template>
