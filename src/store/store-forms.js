import { uid } from 'quasar'
import { firebaseAuth, firebaseDb } from 'boot/firebase'
import { showErrorMessage } from 'src/functions/function-show-error-message'
import Vue from 'vue'

const state = {
  responses: {},
  currentForm: 'ski-repair',
  responsesDownloaded: false
}

const mutations = {
  setCurrentForm (state, value) {
    state.currentForm = value
  },
  setResponsesDownloaded (state, value) {
    state.responsesDownloaded = value
  },
  addResponse (state, payload) {
    // console.log('add:', payload)
    Vue.set(state.responses, payload.id, payload.data)
  }
}

const actions = {
  addResponse ({ dispatch, commit }, response) {
    // console.log('payload:', response)
    const responseId = uid()
    const payload = {
      formId: response.formId,
      id: responseId,
      data: response.data
    }
    dispatch('fbAddResponse', payload)
    commit('addResponse', payload)
  },
  // eslint-disable-next-line no-empty-pattern
  fbAddResponse ({ }, response) {
    // console.log('payload:', response)
    const userId = firebaseAuth.currentUser.uid
    const taskRef = firebaseDb.ref(userId + '/' + response.formId + '/responses/' + response.id)
    taskRef.set(response.data, error => {
      if (error) {
        showErrorMessage(error.message)
      }
      // else {
      // Notify.create(" added!")
      // }
    })
  },
  fbReadData ({ commit }) {
    const userId = firebaseAuth.currentUser.uid
    const userData = firebaseDb.ref(userId)
    // Initial check for data
    userData.once('value', () => {
      commit('setResponsesDownloaded', true)
    }, error => {
      showErrorMessage(error.message)
      this.$router.replace('/auth')
    })

    // child added
    userData.on('child_added', snapshot => {
      const response = snapshot.val()
      // console.log('snapshot: ', snapshot)
      // console.log('response: ', response)
      const payload = {
        id: snapshot.key,
        data: response
      }
      // console.log('payload: ', payload)
      commit('addResponse', payload)
    })
  }
}

const getters = {
  getFormIds: (state) => {
    if (state.responses) {
      return Object.keys(state.responses)
    } else {
      return []
    }
  },
  getColumns: (state) => {
    const cols = []
    const data = state.responses[state.currentForm].columns
    Object.keys(data).forEach(function (key) {
      cols.push(data[key])
    })
    // console.log(cols)
    return cols
  },
  getResponses: (state) => {
    const responses = []
    const data = state.responses[state.currentForm].responses
    Object.keys(data).forEach(function (key) {
      responses.push(data[key])
    })
    return responses
  },
  getFormNameById: (state) => (id) => {
    const data = state.responses
    return data[id].name
  },
  getFormNames: (state) => {
    const names = []
    const data = state.responses
    Object.keys(data).forEach(function (key) {
      names.push(data[key].name)
    })
    // console.log(names)
    return names
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
