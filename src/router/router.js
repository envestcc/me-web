import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { 
        path: '/', 
        component: () => import('@/view/main'),
    },
    {
        path: '/lottery',
        component: () => import('@/view/lottery')
    },
    {
        path: '/resume',
        component: () => import('@/view/resume')
    }
]

export default new VueRouter({
    routes,
    mode: 'history'
})