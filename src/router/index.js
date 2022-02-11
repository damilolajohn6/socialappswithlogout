import Vue from 'vue'
import VueRouter from 'vue-router'
import protectedRoutes from "../views/protected/router";
import publicRoutes from "../views/public/router";
import store from "../store/index";
import middlewarePipeline from '../router/kernel/middlewarePipeline'
import guest from './middleware/guest'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: {
      path: '/login',
      component: () => import('../views/Login.vue'),
      meta: {
        middleware: [
          guest
        ]
      }
    }
  },
{
  path:'/login',
  component: () => import('../views/Login.vue'),
  meta: {
      middleware: [
          guest
      ]
  }

},
{
  path:'/register',
  component: () => import('../views/Register.vue'),
  meta: {
      middleware: [
          guest
      ]
  }

},
    ...protectedRoutes,
    ...publicRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// const prevRoute =null;
router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    //return next()
    return next(vm => {
      vm.prevRoute = from
    })
  }
  const middleware = to.meta.middleware;

  const context = {
    to,
    from,
    next,
    store
  }
  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  })
});

export default router
