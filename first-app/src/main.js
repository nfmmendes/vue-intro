import {createApp, VueElement} from 'vue'
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import $bus from './utils/Events';
import router from './routes.js';
import $pages from './utils/data.js';

let app = createApp(App);

app.use(router);

app.config.globalProperties.$bus = $bus;

app.provide('$bus', $bus);
app.provide('$pages', $pages);

app.mount("#app");

