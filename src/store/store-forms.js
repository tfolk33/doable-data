const state = {
  forms: [
    {
      id: 'q4',
      title: 'Quarter 4 Report',
      data: {
        s1: {
          type: 'PromptAnswer',
          prompt: 'What is your child\'s GPA?'
        }
      }
    },
    {
      id: 'q1',
      title: 'Quarter 1 Report',
      data: {
        s1: {
          type: 'PromptAnswer',
          prompt: 'What is your child\'s favorite color?'
        }
      }
    }
  ],
  currentForm: 'q4'
}

const mutations = {
  setCurrentForm (state, value) {
    state.currentForm = value
  }
}

const actions = {
}

const getters = {
  formsSorted: (state) => {
    const formsSorted = {},
      keysOrdered = Object.keys(state.forms)

    keysOrdered.sort((a, b) => {
      const formAProp = state.forms[a][state.sort].toLowerCase(),
        formBProp = state.forms[b][state.sort].toLowerCase()

      if (formAProp > formBProp) return 1
      else if (formAProp < formBProp) return -1
      else return 0
    })

    keysOrdered.forEach((key) => {
      formsSorted[key] = state.forms[key]
    })

    return formsSorted
  },
  formsFiltered: (state, getters) => {
    const formsSorted = getters.tasksSorted,
      formsFiltered = {}
    if (state.search) {
      Object.keys(formsSorted).forEach(function (key) {
        const form = formsSorted[key]

        if (form.name.toLowerCase().includes(state.search.toLowerCase())) {
          formsFiltered[key] = form
        }
      })
      return formsFiltered
    }
    return formsSorted
  },
  allForms: (state, getters) => {
    const formsFiltered = getters.formsFiltered
    const forms = {}
    Object.keys(formsFiltered).forEach(function (key) {
      const form = formsFiltered[key]
      forms[key] = form
    })
    return forms
  },
  getForms: (state) => {
    return state.forms
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
