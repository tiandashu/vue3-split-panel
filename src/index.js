import Splitpanel from './split-panel/index.vue'

// 全局安装一次
Splitpanel.install = app => {
  app.component(Splitpanel.name, Splitpanel)
}

export default Splitpanel