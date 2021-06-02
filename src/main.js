import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import '@/assets/styles/elDialog.less'
import '@/assets/styles/elButton.less'
import "@/assets/styles/fonts.css"

import 'normalize.css' // 重置css样式

import router from './router'

import store from './store'

import PmAlert from '@/components/PmAlert.js'

const app = createApp(App)

// if (process.env.NODE_ENV === 'development') {
//     window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app
// }
app.config.devtools = true


app.use(ElementPlus)
app.use(router)
app.use(PmAlert)
app.use(store)
app.mount('#app')
