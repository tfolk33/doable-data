<template>
  <div class="q-pa-lg" style="padding: 5% 10% 10% 10%">
    <div class="text-h3">Forms for {{$route.params.uid }}</div>
    <q-list bordered separator class="rounded-borders q-my-md">
      <q-item v-for="(form, index) in formNames" :key="index">
        <q-item-section>
          {{ form }}
        </q-item-section>
        <q-item-section top side>
          <div class="q-gutter-xs">
            <q-btn flat color="primary" icon="bar_chart" label="View Data" v-if="formIds && formIds[index]" :to="'/dashboard/' + $route.params.uid + '/data/' + formIds[index]" />
            <q-btn flat color="primary" icon="pageview" label="View Form" v-if="formIds && formIds[index]" :to="'/forms/' + $route.params.uid + '/' + formIds[index]" />
            <q-btn flat color="primary" icon="link" label="Copy Link" v-if="formIds && formIds[index]" @click="copyFormLink(formIds[index])" />
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { copyToClipboard } from 'quasar'

export default {
  computed: {
    formIds () {
      return this.$store.getters['forms/getFormIds']
    },
    formNames () {
      return this.$store.getters['forms/getFormNames']
    }
  },
  methods: {
    copyFormLink (formId) {
      copyToClipboard(`http://doabledata.com/#/forms/${this.$route.params.uid}/${formId}`)
    }
  }
}
</script>
