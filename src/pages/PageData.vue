<template>
  <div id="q-app">
    <div class="q-pa-md">
      <q-table
        :title="currentForm"
        :data="getResponses"
        :columns="getColumns"
        row-key="name"
      ></q-table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
  beforeMount: function () {
    this.readData()
  },
  data () {
    return {
      /* {"columns": [
        { "name": "name", "required":true, "label":"Name", "align":"left", "sortable": true },
        { "name": "date", "align": "center", "label": "Date", "field": "date", "sortable": true },
        { "name": "tel", "label": "Telephone Number", "field": "tel" },
        { "name": "brand", "label": "Ski Brand", "field": "brand" },
        { "name": "fulltune", "label": "Full Tune", "field": "fulltune" },
        { "name": "hotwaxski", "label": "Hot Wax-Ski", "field": "sodium" },
        { "name": "basictune", "label": "Basic Tune", "field": "basictune" },
        { "name": "waxandwedges", "label": "Wax and Wedges", "field": "waxandwedges" },
        { "name": "board", "label": "Board", "field": "board" }]}
      ] */
    }
  },
  methods: {
    ...mapActions('forms', ['addResponse', 'fbReadData']),
    readData () {
      console.log('created')
      this.fbReadData()
    }
  },
  computed: {
    ...mapGetters('forms', ['getResponses', 'getColumns']),
    ...mapState('forms', ['currentForm'])
  }
}
</script>
