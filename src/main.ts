import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";

// @ts-expect-error
import zhCn from "element-plus/dist/locale/zh-cn.mjs";

import "virtual:svg-icons-register";

const app = createApp(App);

app.use(ElementPlus, { locale: zhCn });

import GlobalComponents from "@/components/index.ts";
app.use(GlobalComponents);

// import "./style.css";
import "@/styles/index.scss"

app.mount("#app");
