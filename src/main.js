import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import { createHead } from "@vueuse/head";
// import VueGtag from "vue-gtag";

createApp(App)
  .use(createHead())
  // Uncomment to use Gtag
  // .use(
  //   VueGtag,
  //   {
  //     config: { id: "G-T1D0DMHZVX" },
  //   },
  //   router
  // )
  .use(router)
  .mount("#app");
