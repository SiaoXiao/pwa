<template>
  <section class="content">
    <div class="headline">
      <h2>
        <div class="icon" :class="icon">
        </div>
        {{ title }}
      </h2>

      <div class="more">
        <a href="/">
          更多<span>»</span>
        </a>
      </div>
    </div>
    <div class="test">
      <Videos v-for="i in 4" />
    </div>

    <div class="fullAdb">
      <a href="/" target="_blank">
        <img src="../assets/swiper/c2959fc63d930854ed33d803eebbdcfc.png" alt="">
      </a>
    </div>
  </section>
</template>
<script setup>

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
})
</script>

<style lang="scss" scoped>
@import "../style/method.scss";

.content {
  margin: 0 auto;
  max-width: 1200px;
  padding: 12px;
}

.headline {
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 24px;
    font-weight: 600;

    .icon {
      width: 30px;
      height: 30px;
      background-position: center;
      background-size: cover;
    }
  }
}

.hot {
  background-image: url(../assets/icon/hot.png);
}

.actor {
  background-image: url(../assets/icon/actor.png);
}

.free {
  background-image: url(../assets/icon/free.png);
}

.like {
  background-image: url(../assets/icon/like.png);
}

.official {
  background-image: url(../assets/icon/official.png);
}

.more {
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  span {
    margin-left: 5px;
  }

  @include hover {
    &:hover {
      color: #f66063;
      transition: 0.5s;
    }
  }
}

.test {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 16px;
}

.fullAdb {
  width: 100%;
  margin-top: 32px;
}

@media (max-width: 1024px) {
  .test {

    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 640px) {
  .test {

    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 450px) {
  .test {

    grid-template-columns: repeat(1, 1fr);
  }
}
</style>