<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title class="absolute-center">
          Doable Data
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
      :breakpoint="767"
      :width="250"
    >
      <FormList
        :forms="getForms" />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import FormList from 'components/FormList.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'MainLayout',
  components: { FormList },
  computed: {
    ...mapGetters('forms', ['getForms'])
  },
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
