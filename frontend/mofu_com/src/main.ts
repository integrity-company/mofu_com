import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./js/router/user/router";

createApp(App).use(router).mount("#app");
