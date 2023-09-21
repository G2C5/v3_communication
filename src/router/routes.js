const routes = [
    {
        path: '/props',
        component: () => import('../views/communication/01_props/Vsinger.vue'),
        meta: {
            title: 'props',
            hidden: false,
            icon: 'ChatLineSquare'
        }
    },
    {
        path: '/myevent',
        component: () => import('../views/communication/02_myselfEvent/Vsinger.vue'),
        meta: {
            title: '自定义事件',
            hidden: false,
            icon: 'ChatLineSquare'
        }
    },
    {
        path: '/bus',
        component: () => import('../views/communication/03_$bus/Vsinger.vue'), meta: {
            title: '全局事件总线',
            hidden: false,
            icon: 'ChatLineSquare'
        }
    },
    {
        path: '/vmodel',
        component: () => import('../views/communication/04_v-model/Vsinger.vue'),
        meta: {
            title: 'v-model',
            hidden: false,
            icon: 'ChatLineSquare'
        }
    },
    {
        path: '/useattrs',
        component: () => import('../views/communication/05_useAttrs/Vsinger.vue'),
        meta: {
            title: 'useattrs',
            hidden: false,
            icon: 'ChatLineSquare'
        }
    },
    {
        path: '/refandparent',
        component: () => import('../views/communication/06_ref与expose与$parent/Vsinger.vue'),
        meta: {
            title: 'ref&expose&parent',
            hidden: false,
            icon: 'ChatLineSquare'
        }
    },
    {
        path: '/provideandinject',
        component: () => import('../views/communication/07_provide与inject/Vsinger.vue'),
        meta: {
            title: 'provide&inject',
            hidden: false,
            icon: 'ChatLineSquare'
        }
    },
    {
        path: '/pinia',
        component: () => import('../views/communication/08_pinia/Vsinger.vue'),
        meta: {
            title: 'pinia',
            hidden: false,
            icon: 'ChatLineSquare'
        }
    },
    {
        path: '/slot',
        component: () => import('../views/communication/09_slot/Vsinger.vue'),
        meta: {
            title: '插槽',
            hidden: false,
            icon: 'ChatLineSquare'
        },
        children: [
            {
                path: '/slot/slotadd',
                component: () => import('../views/communication/09_slot/Vsinger.vue'),
                meta: {
                    title: 'slot方法',
                    hidden: false,
                    icon: 'ChatLineSquare'
                }
            },
            {
                path: '/slot/slota',
                component: () => import('../views/jsDemo/index.vue'),
                meta: {
                    title: 'slot方法',
                    hidden: false,
                    icon: 'ChatLineSquare'
                }
            }
        ]
    },

    {
        path: '/array',
        component: () => import('../views/jsDemo/index.vue'),
        meta: {
            title: '数组方法',
            hidden: false,
            icon: 'ChatLineSquare'
        },
        children: [
            {
                path: '/array/testvue',
                component: () => import('../views/jsDemo/Testvue.vue'),
                meta: {
                    hidden: false,
                    icon: 'ChatLineSquare',
                    title: 'Test',
                },
            },
        ]
    },
    {
        path: '/',
        redirect: '/props',
        meta: {
            hidden: true
        },
    }
]

export default routes