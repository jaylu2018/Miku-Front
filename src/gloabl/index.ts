//按需引入element-plus组件库
import { App } from 'vue'
import registerElement from './register-element-plus'

export function globalRegister(app: App): void {
  app.use(registerElement)
}
