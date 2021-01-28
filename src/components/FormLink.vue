<template>
  <q-item
    clickable
    @click="selectForm"
    exact
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'FormLink',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: 'school'
    }
  },
  methods: {
    ...mapActions('forms', ['setCurrentForm']),
    selectForm () {
      this.forms.setCurrentForm(this.id)
    }
  }
}
</script>
