import { createApp } from 'vue';
import App from './App.vue';

import { router } from './router/index';

import 'nes.css/css/nes.min.css';
import './style/global/base-animation.scss';
import './style/global/width-media.scss';
import './style/global/height-media.scss';
import './style/global/base-public.scss';

const app = createApp(App);
app.use(router);

app.mount('#app');

