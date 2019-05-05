import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//路由按需加载,第三个参数作为打包包名使用
const Home = r => require.ensure([], () => r(require('@/pages/home/home.vue')), 'home')
const demo = r => require.ensure([], () => r(require('@/pages/demo/index.vue')), 'demo') // $attrs,$listeners
const radio = r => require.ensure([], () => r(require('@/pages/radio/index.vue')), 'radio')
const customtag = r =>
  require.ensure([], () => r(require('@/pages/element-customtag/index.vue')), 'customtag') // 函数式组件
const functionButton = r =>
  require.ensure([], () => r(require('@/pages/functionButton/index.vue')), 'functionButton') // 函数式组件
const renderComponent = r =>
  require.ensure(
    [],
    () => r(require('@/pages/noRenderComponent/index.vue')),
    'renderComponent'
  ) // 无渲染组件

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/home'
    },
    {
      path: '/home',
      name: '首页',
      component: Home,
      redirect: '/home/demo',
      children: [
        {
          title: 'demo',
          path: 'demo',
          name: 'demo',
          component: demo,
          meta: {
            keepAlive: true
          }
        },
        {
          title: 'radio',
          path: 'radio',
          name: 'radio',
          component: radio,
          meta: {
            keepAlive: false
          }
        },
        {
          title: '无渲染组件',
          path: 'renderComponent',
          name: 'renderComponent',
          component: renderComponent,
          meta: {
            keepAlive: false
          }
        },
        {
          title: '函数式组件',
          path: 'functionButton',
          name: 'functionButton',
          component: functionButton,
          meta: {
            keepAlive: false
          }
        },
        {
          title: 'eleCustomtag',
          path: 'customtag',
          name: 'customtag',
          component: customtag,
          meta: {
            keepAlive: false
          }
        }
      ]
    }
  ]
})
