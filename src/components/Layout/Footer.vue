<script setup>
const currentYear = ref(null);

const init = onMounted(() => {
  const date = new Date();
  currentYear.value = date.getFullYear();
})

</script>

<template>
  <footer>
    <div class="link">
      <div class="logo_box">
        <a href="/">
          <img src="../../assets/logo/logo.png" alt="funs girl logo">
        </a>
      </div>
      <div class="tool">
        <ul>
          <li>
            <a href="/">
              <span class="icon concur"></span>
              <div class="text">
                <p>代理加盟</p>
                <span>優質合作夥伴共同成長</span>
              </div>
            </a>
          </li>
          <li>
            <a href="/">
              <span class="icon wt"></span>
              <div class="text">
                <p>常見問題</p>
                <span>即時在線解決問題</span>
              </div>
            </a>
          </li>
          <li>
            <a href="/">
              <span class="icon kefu"></span>
              <div class="text">
                <p>線上客服</p>
                <span>服務時間週一~週五 11:00-19:00 週六、日及國定假日公休</span>
              </div>
            </a>
          </li>
        </ul>
        <div class="qrBox">
          <div class="qr_item">
            <span>iPhone下載</span>
            <div><img src="../../assets/qr_ios.png" alt=""></div>
          </div>
          <div class="qr_item">
            <span>Android下載</span>
            <div><img src="../../assets/qr_android.png" alt=""></div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">Copyright©{{ currentYear }}.All Rights Reserved.</div>
  </footer>
</template>


<style lang="scss" scoped>
@import "../../style/method.scss";

footer {
  padding: 12px;
  width: 100%;
  background: #171b24;

  // div {
  //   margin: 0 auto;
  //   max-width: 1200px;
  // }

  .link {
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    align-items: start;
    // justify-content: space-between;

    ul {
      display: flex;
      flex-wrap: wrap;
      margin-right: 10px;

      li {
        padding: 12px;
        border-radius: 3px;

        a {
          display: flex;


          .icon {
            width: 50px;
            height: 50px;
            min-width: 50px;
            min-height: 50px;
            margin-right: 6px;
            background-position: center;
            background-size: cover;
          }

          .kefu {
            background-image: url(../../assets/icon/kefu.png);
          }

          .wt {
            background-image: url(../../assets/icon/wt.png);
          }

          .concur {
            background-image: url(../../assets/icon/concur.png);
          }

          .text {
            font-size: 18px;
            font-weight: 500;
            color: #828282;

            p {
              white-space: nowrap;

            }

            span {
              font-size: 14px;
            }
          }
        }

        &:hover {
          background: #1e232f;
          transition: 0.5s;
        }
      }
    }

    .tool {
      flex-grow: 1;
      display: flex;

    }

    .qrBox {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      gap: 10px;

      .qr_item {
        // border: 1px solid #ffffff;

        span {
          padding: 12px;
          background-color: #242831;
          color: #a0a4ae;
          border-radius: 3px;
          text-align: center;
          cursor: pointer;
          white-space: nowrap;
          display: block;

          &:hover {
            background-color: #363b46;
            transform-origin: top left;
            transition: 0.5s;
          }
        }

        div {
          display: none;
          width: 100%;
        }
      }
    }
  }

  .copyright {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    margin-top: 16px;
    font-size: 14px;
    color: #828282;
  }
}


.logo_box {
  width: 150px;
  min-width: 150px;
  margin-right: 32px;

  a {
    display: block;

    img {}
  }
}



@media (max-width: 640px) {
  .link {
    flex-direction: column;
    gap: 10px;

    .logo_box {
      margin-right: 0;
      margin: 0 auto;
    }

    .tool {
      margin: 0 auto;
      flex-direction: column;

      ul {
        flex-direction: column;
        margin-right: 0;
      }

      .qrBox {



        .qr_item {



          div {
            margin-top: 6px;
            padding: 10px;
            display: flex;
            justify-content: center;

            img {
              width: 160px;
              height: 160px;
            }
          }
        }
      }
    }
  }
}
</style>