export default function auth ({ next, store }){
  
    if(!store.state.auth.token){
        return next({
            path: '/login'
        })
    }

    return next()
}