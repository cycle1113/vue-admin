import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { App } from 'vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

export default {
  install (app:App) {
    app.use(ElementPlus, { locale: zhCn, size: 'small', zIndex: 3000 })
  }
}
