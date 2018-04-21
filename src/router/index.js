import Vue from 'vue'
import Router from 'vue-router'
import TemplateEditor from '@/components/TemplateEditor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TemplateEditor',
      component: TemplateEditor
    }
  ]
})
