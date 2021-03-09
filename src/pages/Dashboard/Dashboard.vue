<template>
  <div class="q-pa-lg" style="padding: 5% 10% 10% 10%">
    <div class="text-h3">{{ companyName }}</div>
    <q-list bordered separator class="rounded-borders q-my-md">
      <q-item v-for="(form, index) in formNames" :key="index">
        <q-item-section>
          {{ form }}
        </q-item-section>
        <q-item-section top side>
          <div class="q-gutter-xs">
            <q-btn flat color="primary" icon="bar_chart" label="View Data" v-if="formIds && formIds[index]" @click="viewData($route.params.uid, formIds[index])" />
            <q-btn flat color="primary" icon="pageview" label="View Form" v-if="formIds && formIds[index]" @click="viewForm($route.params.uid, formIds[index])" />
            <q-btn flat color="primary" icon="link" label="Copy Link" v-if="formIds && formIds[index]" @click="copyFormLink(formIds[index])" />
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { copyToClipboard } from 'quasar'
import { mapState, mapActions } from 'vuex'

export default {
  beforeMount: function () {
    console.log(this.$store)
    this.$store.commit('forms/setCurrentForm', this.$route.params.formId)
    this.readData()
  },
  computed: {
    formIds () {
      return this.$store.getters['forms/getFormIds']
    },
    formNames () {
      return this.$store.getters['forms/getFormNames']
    },
    ...mapState('forms', ['companyName'])
  },
  methods: {
    ...mapActions('forms', ['setCurrentForm']),
    copyFormLink (formId) {
      copyToClipboard(`http://doabledata.com/#/forms/${this.$route.params.uid}/${formId}`)
    },
    viewData (uid, id) {
      this.setCurrentForm(id)
      this.$router.replace('/dashboard/' + uid + '/data/' + id)
    },
    viewForm (uid, id) {
      this.setCurrentForm(id)
      this.$router.replace('/forms/' + uid + '/' + id)
    }
  }
}
</script>
