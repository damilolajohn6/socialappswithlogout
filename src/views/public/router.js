import guest from '../../router/middleware/guest'

const publicRoutes = [
    {
        path:'/',
        component: () => import('./layouts/Layout.vue'),
        children:[
            
           
            {
                path:'check-user',
                component: () => import('./CheckUser.vue'),
                meta: {
                    middleware: [
                        guest
                    ]
                }

            },
            {
                path:'verify-records',
                component: () => import('./VerifyRecords.vue'),
                meta: {
                    middleware: [
                        guest
                    ]
                }

            },
           
        ]
    }
]

export default publicRoutes;