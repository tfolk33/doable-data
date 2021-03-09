import { SessionStorage } from 'quasar'
import { firebaseAuth } from 'boot/firebase'

export default async ({ router }) => {
  router.beforeEach((to, from, next) => {
    const loggedIn = SessionStorage.getItem('LoggedIn')
    const formVisited = SessionStorage.getItem('formVisited')
    if (firebaseAuth.isSignInWithEmailLink(location.href)) {
      if (formVisited) {
        next(false)
      } else {
        SessionStorage.set('formVisited', true)
        next()
      }
    } else if (!loggedIn && to.path !== '/auth') {
      next('/auth')
    } else {
      next()
    }
  })
}
