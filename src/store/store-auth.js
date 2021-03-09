import { Loading, SessionStorage } from 'quasar'
import { firebaseAuth } from 'boot/firebase'
import { showErrorMessage } from 'src/functions/function-show-error-message'

const state = {
  loggedIn: false
}

const mutations = {
  setLoggedIn (state, value) {
    console.log('logged status: ', value)
    state.loggedIn = value
  }
}

const actions = {
  // eslint-disable-next-line no-empty-pattern
  registerUser ({ commit, dispatch }, payload) {
    Loading.show()
    firebaseAuth.createUserWithEmailAndPassword(
      payload.email, payload.password)
      .then(response => {
        commit('setLoggedIn', true)
        SessionStorage.set('LoggedIn', true)
        this.$router.push('/form')
        dispatch('forms/fbReadData', null, { root: true })
        Loading.hide()
        console.log('response: ', response)
      })
      .catch(error => {
        showErrorMessage(error.message)
      })
  },
  // eslint-disable-next-line no-empty-pattern
  loginUser ({ commit, dispatch }, payload) {
    Loading.show()
    firebaseAuth.signInWithEmailAndPassword(
      payload.email, payload.password)
      .then(response => {
        commit('setLoggedIn', true)
        SessionStorage.set('LoggedIn', true)
        this.$router.push('/form')
        Loading.hide()
        dispatch('forms/fbReadData', null, { root: true })
        console.log('response: ', response)
      })
      .catch(error => {
        showErrorMessage(error.message)
      })
  },
  logoutUser ({ commit }) {
    firebaseAuth.signOut()
    commit('setLoggedIn', false)
    this.$router.replace('/auth')
  }
  /* handleAuthStateChange ({ commit, dispatch }) {
    firebaseAuth.onAuthStateChanged(user => {
      Loading.hide()
      if (user) {
        commit('setLoggedIn', true)
        LocalStorage.set('LoggedIn', true)
        this.$router.push('/')
        dispatch('tasks/fbReadData', null, { root: true })
      } else {
        // commit('tasks/clearTasks', null, { root: true })
        commit('tasks/setResponsesDownloaded', false, { root: true })
        commit('setLoggedIn', false)
        LocalStorage.set('LoggedIn', false)
        this.$router.replace('/auth')
      }
    })
  } */
}

const getters = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
