const routesPlus = [
    {
        path: '/props',
        component: () => import('@/views/communicationPlus/props/Vsinger.vue'),
        meta: {
            title: 'props',
            hidden: false,
            icon: 'ChatLineSquare'
        }
    },
    {
        path: '/myEvent',
        component: () => import('@/views/communicationPlus/emits/Vsinger.vue'),
        meta: {
            title: '自定义事件',
            hidden: false,
            icon: 'ChatLineSquare'
        }
    },
    {
        path: '/img',
        component: () => import('@/views/communicationPlus/testImg.vue'),
        meta: {
            title: '图片',
            hidden: false,
            icon: 'ChatLineSquare'
        }
    },
    {
        path: '/',
        redirect: '/props',
        meta: {
            hidden: true
        },
    }
]
export default routesPlus