import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/index.js"; // 1. Importas tu enrutador
import "./style.css";
import "@flaticon/flaticon-uicons/css/all/all.css";

const app = createApp(App);

app.use(router); // 2. Le dices a Vue que use el router

app.mount("#app"); // 3. Finalmente montas la aplicación
