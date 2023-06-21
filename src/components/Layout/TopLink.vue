<template>
  <div class="top_link">
    <div>
      <ul class="flex-container">
        <li>網頁公告</li>
        <li>常見問題</li>
        <li>線上客服</li>
      </ul>
      <ul>
        <li>繁體中文</li>
        <li>代理加盟</li>
      </ul>
    </div>
  </div>
</template>
<script setup>
</script>


<style lang="scss" scoped>
@import "../../style/method.scss";

.top_link {
  box-sizing: border-box;
  padding: 12px;
  width: 100%;
  background: #171b24;

  div {
    justify-content: space-between;
    display: flex;
    margin: 0 auto;
    max-width: 1200px;

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 60px;

      li {
        position: relative;
        color: #686c75;
        cursor: pointer;

        @include hover {
          &:hover {
            color: #ffffff;
            transition: 0.5s;
          }
        }

        &:not(:last-child)::before {
          position: absolute;
          content: '';
          right: -30px;
          height: 100%;
          width: 1px;
          background: #686c75;
          cursor: none;
        }
      }
    }
  }

}

@media (max-width: 640px) {
  .top_link {
    div {
      flex-direction: column;
      gap: 15px;

    }
  }
}
</style>