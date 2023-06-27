import { createApp } from "vue";
import "@/style/index.css";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import TawkMessengerVue from "@tawk.to/tawk-messenger-vue-3";

createApp(App)
  .use(router)
  .use(store)
  .use(TawkMessengerVue, {
    propertyId: "6498ee2d94cf5d49dc5fcd0d",
    widgetId: "1h3qm4ong",
  })
  .mount("#app");
