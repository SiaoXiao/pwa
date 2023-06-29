<template>
  <RouterView></RouterView>
  <div v-show="isActive" class="scrollBtn" @click.passive="handleScrollTop">
    <img src="./assets/icon/gototop.png" alt="">
  </div>
</template>

<script setup>
// 滾輪按鈕開關
const isActive = ref(false);
// 顯示滾輪按鈕
const handleScroll = () => {
  if (window.scrollY >= 100) {
    isActive.value = true;
  } else {
    isActive.value = false;
  }
};
// 回到最上層
const handleScrollTop = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};

// App.vue init
const init = onMounted(async () => {

  // 新增滾輪監聽事件
  window.addEventListener("scroll", handleScroll);
  document.oncontextmenu = function () {
    return false;
  };
});

// 移除滾輪監聽事件
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style>
* {
  -webkit-tap-highlight-color: transparent;
}

@supports ((height: constant(safe-area-inset-top)) or (height: env(safe-area-inset-top))) and (-webkit-overflow-scrolling: touch) {
  #app {
    /* 适配齐刘海 */
    padding-top: 20px;
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);

    /* 适配底部小黑条 */
    padding-bottom: 0;
    padding-bottom: costant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }
}

@media screen and (orientation: portrait) {
  #app {
    /* 防止页面被刘海遮住 */
    padding-top: constant(safe-area-inset-top);
  }
}

@media screen and (orientation: landscape) {
  #app {
    /* IOS 11支持*/
    padding-right: constant(safe-area-inset-right);
    padding-left: constant(safe-area-inset-left);
    /*IOS 11.2版本版本支持*/
    padding-right: env(safe-area-inset-right);
    padding-left: env(safe-area-inset-left);
  }
}

.scrollBtn {
  position: fixed;
  width: 50px;
  height: 50px;
  background: #000;
  color: #fff;
  bottom: 10%;
  right: 5%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
}
</style>