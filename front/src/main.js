import { createApp } from 'vue'
import App from './App.vue'
import Element from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import 'normalize.css'
import './style/index.scss'

createApp(App).use(store).use(router).use(Element).mount('#app')
