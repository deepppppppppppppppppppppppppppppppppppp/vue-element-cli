import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//路由按需加载,第三个参数作为打包包名使用
const Home = r => require.ensure([], () => r(require('@/pages/home/home.vue')), 'home')
const demmo = r => require.ensure([], () => r(require('@/pages/demo/index.vue')), 'demmo')


export default new Router({
    routes: [{
            path: '/',
            name: 'root',
            redirect: '/home'
        },
        {
            path: '/home',
            name: '首页',
            component: Home,
            redirect: '/home/demmo',
            children: [{
                path: 'demmo',
                name: 'demmo',
                component: demmo,
                meta: {
                    keepAlive: false
                }
            }]
        },
    ]
})