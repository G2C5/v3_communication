// 引入全局组件
import MyMenu from '@/compnents/MyMenu.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const allGlobalCompnents = { MyMenu }
// 全局组件配置
export default {
    install(app) {
        Object.keys(allGlobalCompnents).forEach(key => {
            // 注册组件
            app.component(key, allGlobalCompnents[key])
        })

        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
    }
}