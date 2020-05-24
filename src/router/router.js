
import Router from "vue-router";

const router = new Router({
    routes: [
        {
            path: '*',
            redirect: '/'
        },
        {
            path: '/',
            name: 'index',
            component: () => import('@/components/index.vue'), // vue路由懒加载  异步加载
            meta: {
                title: '首页',
                //requireAuth: true // 只要此字段为true，必须做鉴权处理
            }
        },
        {
            path: '/search',
            name: 'search',
            component: () => import('@/components/index.vue'), // vue路由懒加载  异步加载
            meta: {
                title: '查询结果',
                //requireAuth: true // 只要此字段为true，必须做鉴权处理
            }
        },
        {
            path:"/policy",
            name: 'policyindex',
            component: () => import('@/components/policy.vue'), // vue路由懒加载  异步加载
            meta: {
                title: '政策动态',
            }
        },
        {
            path: '/policy/:id',
            name: 'policy',
            component: () => import('@/components/policy.vue'), // vue路由懒加载异步加载
            meta: {
                title: '政策动态',
            }
        },
        {
            path:"/detail/:id",
            name: 'detail',
            component: () => import('@/components/content.vue'),
            meta: {
                title: '新闻资讯',
            }
        },
        {
            path:"/interview",
            name: 'interview',
            component: () => import('@/components/fangtan.vue'),
            meta: {
                title: '招办访谈',
            }
        },
        {
            path:"/personContent/:id",
            name: 'personContent',
            component: () => import('@/components/modules/personContent.vue'),
            meta: {
                title: '招办访谈',
            }
        },
        {
            path:"/question",
            name: 'mainquestion',
            component: () => import('@/components/mainquestion.vue'),
            meta: {
                title: '我要提问',
            }
        },
        {
            path:"/score",
            name: 'score',
            component: () => import('@/components/score.vue'),
            meta: {
                title: '历年分数',
            }
        },
        {
            path:"/guide",
            name: 'guide',
            component: () => import('@/components/content.vue'),
            meta: {
                title: '填报指南',
            }
        },
    ]
})

router.beforeEach((to,from,next)=>{
    // 根据路由元信息设置文档标题
    window.document.title = to.meta.title
    next()
  })
export default router