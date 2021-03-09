<template>
  <div class="q-pa-lg" style="padding: 5% 10% 10% 10%">
    <q-table
    :title="getFormNameById(currentForm)"
    :data="getResponses"
    :columns="getColumns"
    row-key="name">
    </q-table>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
  beforeMount: function () {
    console.log(this.$store)
    this.$store.commit('forms/setCurrentForm', this.$route.params.formId)
    this.readData()
  },
  methods: {
    ...mapActions('forms', ['addResponse', 'fbReadData']),
    readData () {
      this.fbReadData()
    }
  },
  computed: {
    ...mapGetters('forms', ['getFormNameById', 'getResponses', 'getColumns']),
    ...mapState('forms', ['currentForm'])
  }
}
</script>
