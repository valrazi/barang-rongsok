import app from "@/core/app";
import router from "@/core/router";
import pinia from "@/core/pinia";
import i18n from "@/core/i18n";

import "@/assets/css/main.css";
import '../node_modules/flowbite-vue/dist/index.css'


app.use(router);
app.use(pinia);
app.use(i18n);
app.mount("#app");
