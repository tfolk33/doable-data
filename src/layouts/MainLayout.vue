<template>
  <q-layout view="hHh lpR fFf">

    <q-header bordered class="bg-dark text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="~assets/DoableData-white.png">
          </q-avatar>
          DoableData
        </q-toolbar-title>
        <q-btn
          :to="'/dashboard/' + $route.params.uid"
          flat
          icon-right="home"
          label="Home" />

          <q-btn
          v-if="!loggedIn"
          to="/auth"
          flat
          icon-right="account_circle"
          label="Login" />

          <q-btn
          v-else
          @click="logout"
          flat
          icon-right="account_circle"
          label="Logout" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { SessionStorage } from 'quasar'

export default {
  name: 'MainLayout',
  data () {
    return {
      // loggedIn: SessionStorage.getItem('LoggedIn')
    }
  },
  computed: {
    ...mapState('auth', ['loggedIn'])
  },
  methods: {
    ...mapActions('auth', ['logoutUser']),
    logout () {
      SessionStorage.set('LoggedIn', false)
      this.loggedIn = SessionStorage.getItem('LoggedIn')
      this.logoutUser()
    }
  }
}
</script>
