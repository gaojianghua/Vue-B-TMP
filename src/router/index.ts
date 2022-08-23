import { createRouter, createWebHistory } from 'vue-router'
import publicRoutes from './modules/publicRoutes'
import privateRoutes from './modules/privateRoutes'

// 创建 vueRouter 路由
const router = createRouter({
    history: createWebHistory(),
    routes: [...publicRoutes, ...privateRoutes]
})

export default router
