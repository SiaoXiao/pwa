<template>
  <div class="langs">
    <img src="../assets/icon/flag/flag_hk.svg" alt="">
    <ul class="language-list">
      <li>
        <img src="../assets/icon/flag/flag_vn.svg" alt="">
        Tiếng Việt
      </li>
      <li>
        <img src="../assets/icon/flag/flag_en.svg" alt="">
        English
      </li>
      <li>
        <img src="../assets/icon/flag/flag_cn.svg" alt="">
        简体中文
      </li>
      <li>
        <img src="../assets/icon/flag/flag_hk.svg" alt="">
        繁體中文
      </li>
    </ul>
  </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
@import "../style/method.scss";

.langs {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:hover .language-list {
    visibility: visible;
    opacity: 1;
    top: 90%;
  }
}

.language-list {
  position: absolute;
  right: 0;
  top: 140%;
  width: 130px;
  z-index: 10;
  background: #eafeff;
  border-radius: 3px;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out, top 0.5s ease-in-out;

  li {
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 10px;
    color: #323232;

    @include hover {
      &:hover {
        color: #ffffff;
        background: linear-gradient(180deg, #3f3eb6, #c3c2f7);
        transition: 0.5s;
      }
    }

    img {
      margin-right: 5px;
      width: 20px;
      height: 20px;
    }
  }
}
</style>