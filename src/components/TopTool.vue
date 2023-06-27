<script setup>

</script>

<template>
  <header>
    <div class="content">
      <div class="header">
        <div class="logo_box">
          <a href="/">
            <img src="../assets/logo/logo.png" alt="funs girl logo">
          </a>
        </div>
        <div>
          <ul class="member_links">
            <li>
              <Search />
            </li>
            <li>
              <Langs />
            </li>
            <li><a href="/"><img src="../assets/icon/avatar.png" alt=""></a></li>
          </ul>
        </div>
      </div>
      <ul class="menu">
        <li>首頁</li>
        <li>專題</li>
        <li>最新</li>
        <li>熱門</li>
        <li>分類</li>
        <li>演員</li>
      </ul>
      <div class="swiperOvO">
        <Swiper />
      </div>
    </div>
  </header>
  <div class="owo">
    <ListVideos title="最新上架" icon="hot" />
  </div>
  <div class="owo">
    <ListVideos title="精選長片" icon="actor" />
  </div>
  <div class="owo">
    <ListVideos title="限時免費" icon="free" />
  </div>
  <div class="owo">
    <ListVideos title="最受歡迎的專題" icon="like" />
  </div>
  <div class="owo">
    <ListVideos title="無碼" icon="official" />
  </div>
</template>


<style lang="scss" scoped>
header {
  width: 100%;
}

.content {
  margin: 0 auto;
  max-width: 1200px;
  padding: 12px;

  .menu {
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    gap: 20px;
    justify-content: start;
    white-space: nowrap;

    li {
      position: relative;
      box-sizing: border-box;
      padding: 12px 16px;
      cursor: pointer;
      transition: color .5s;
      text-align: center;
      font-weight: 500;

      &::before {
        position: absolute;
        content: '';
        left: 0;
        bottom: 0;
        width: 0;
        height: 1px;
        background: #f66063;
        transition: width .5s;
      }

      &:hover {
        color: #f66063;

        &:before {
          width: 100%;
        }
      }

    }
  }
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}


.logo_box {
  width: 150px;

  a {
    display: block;

    img {}
  }
}

.member_links {
  display: flex;
  align-items: center;
  gap: 16px;

  li {
    width: 38px;
    height: 38px;
  }
}


@media (max-width: 640px) {
  .content {
    .menu {
      grid-template-columns: 1fr 1fr;
    }

  }
}

.swiperOvO {
  height: 400px;
  margin-top: 16px;
}

@media (max-width: 1200px) {
  .swiperOvO {
    height: 30vw;
  }
}
</style>