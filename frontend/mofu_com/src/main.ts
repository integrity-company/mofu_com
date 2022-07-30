import { createApp } from "vue";
import UserApp from "./entry/user/UserApp.vue";
import { router } from "./js/router/user/router";

createApp(UserApp).use(router).mount("#app");
