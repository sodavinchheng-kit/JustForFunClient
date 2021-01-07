export default function ({ store, redirect, route }) {
    if (!store.state.auth.user.auth && route.fullPath != '/register' && route.fullPath != '/login') {
        redirect('/login')
    }
}