import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueLazyload from 'vue3-lazyload';
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import store from './store/index'
import loadingImage from '@/assets/loadimage.gif'
import errorImgae from '@/assets/error.png'
import '@/mock/mockServer.js'
// 引入自定义插件：全局组件配置
import globalCompents from './plugin/globalCompents'



const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn
})
app.use(VueLazyload, {
    loading: loadingImage,
    error: errorImgae
});

app.use(globalCompents)
app.use(router)
app.use(store)
app.mount('#app')
