import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '*',
    redirect: '/'
}, {
    path: '/',
    name: 'Layout',
    component: () => import('../components/Layout'),
    redirect: '/home'
}, {
    path: '/home',
    name: 'Home',
    component: () => import('../components/Layout'),
    children: [{
        path: '/',
        component: () => import('../views/Home')
    }]
}, {
    path: '/photo',
    name: 'Photo',
    component: () => import('../components/Layout'),
    children: [{
        path: '/',
        component: () => import('../views/Photo')
    }, {
        path: 'main',
        component: () => import('../views/Photo/photoMessage.vue')
    }]
}, {
    path: '/sweet',
    name: 'Sweet',
    component: () => import('../components/Layout'),
    children: [{
        path: '/',
        component: () => import('../views/Sweet')
    }]
}, {
    path: '/user',
    name: 'User',
    component: () => import('../components/Layout'),
    children: [{
        path: '/',
        component: () => import('../views/User')
    }]
}, {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login')
}]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (sessionStorage.getItem('login') && to.path == '/login') next('/')
    if (!sessionStorage.getItem('login') && to.path != '/login') next('/login')
    next()
})

export default router