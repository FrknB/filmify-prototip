import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import style from "./assets/main.css";

createApp(App).use(router).mount('#app')