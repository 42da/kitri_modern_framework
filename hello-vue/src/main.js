/* 엔트리 포인트 */

import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')    // id 가 app인 탭에 ./App.vue 를 마운트
