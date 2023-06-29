<template>
  <swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :pagination="{
    clickable: true,
  }" :navigation="true" D :autoplay="{
  delay: 2500,
  disableOnInteraction: false,
}" class="mySwiper">
    <swiper-slide><img src="../assets//swiper/02b910976b23d2d4ced519c983c2724c.jpg" alt=""></swiper-slide>
    <!-- <swiper-slide><img src="../assets//swiper/5775f95c7e0df38d74089de5111dfd40.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../assets//swiper/e0cadd1d45f81dd15264d6ced94c15c6.gif" alt=""></swiper-slide>
    <swiper-slide><img src="../assets//swiper/ff5b5e6b17e405d1c4e19a647df35d1a.jpg" alt=""></swiper-slide> -->
  </swiper>
</template>
<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core';
SwiperCore.use([Pagination, Navigation, Autoplay]);
</script>
<style lang="scss" scoped>
::v-deep .swiper-button-next::after {
  content: ">";
}

::v-deep .swiper-button-prev::after {
  content: "<";
}

::v-deep .swiper-pagination-bullet-active {
  background: rgba(255, 255, 255, 0.5);
}

::v-deep .swiper-pagination-bullet {
  background: rgba(160, 160, 160, 0.53);
  width: 10px;
  height: 10px;
}

::v-deep .swiper-button-next,
::v-deep .swiper-button-prev {

  width: 50px;
  height: 50px;
  background: transparent;
  transition: all .5s;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 0.74);
  }

  &::after {
    line-height: 50px;
    font-size: 30px;
    font-weight: bolder;
    color: rgba(160, 160, 160, 0.53);
  }
}



.swiper {
  width: 100%;
  height: 100%;
  user-select: none;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  // background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  margin-left: auto;
  margin-right: auto;
}
</style>