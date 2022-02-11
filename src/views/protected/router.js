import auth from '../../router/middleware/auth'

const protectedRoutes = [
    {
        path:'/dashboard',
        component: () => import('./layouts/Dashboard.vue'),
        children:[
            {
                path:'',
                component: () => import('./Feeds.vue'),
                meta: {
                    middleware: [
                        auth
                    ]
                }
            },
            {
                path: '/dashboard/profile',
                component: () => import('./Profile.vue'),
                meta: {
                    middleware: [
                        auth
                    ]
                }
            },

           
        ]
    }

]

export default protectedRoutes;