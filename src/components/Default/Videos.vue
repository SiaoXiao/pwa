<template>
  <div class="defaultVideo">
    <div class="default_video_img">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round"
          d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
      </svg>
    </div>
    <div class="default_video_text"></div>
  </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
.default_video_img {
  box-sizing: border-box;
  width: 100%;
  // max-width: 24rem;
  min-height: 160px;
  padding: 20px 10px;
  background: #ccc;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 50px;
    height: 50px;
    color: #323232;
  }
}

.default_video_text {
  background: #ccc;
  width: 100%;
  margin: 0 auto;
  margin-top: 5px;
  height: 16px;
  border-radius: 3px;

}
</style>