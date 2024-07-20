import {createApp, VueElement} from 'vue'
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import $bus from './utils/Events';
import router from './routes.js';

let app = createApp(App);

app.use(router);

app.config.globalProperties.$bus = $bus;

app.mount("#app");

