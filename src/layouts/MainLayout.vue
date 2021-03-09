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
      </q-toolbar>

      <q-btn
      v-if="!loggedIn"
      @click="login"
      flat
      icon-right="account_circle"
      label="Login"
      class="absolute-right" />

      <q-btn
      v-else
      @click="logout"
      flat
      icon-right="account_circle"
      label="Logout"
      class="absolute-right" />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { mapActions } from 'vuex'
import { SessionStorage } from 'quasar'

export default {
  name: 'MainLayout',
  data () {
    return {
      loggedIn: SessionStorage.getItem('LoggedIn')
    }
  },
  computed: {
    // ...mapState('auth', ['loggedIn'])
    // ...mapGetters('auth', ['getLoginStatus'])
  },
  methods: {
    ...mapActions('auth', ['logoutUser']),
    login () {
      SessionStorage.set('LoggedIn', false)
      this.loggedIn = SessionStorage.getItem('LoggedIn')
      this.$router.replace('/auth')
    },
    logout () {
      SessionStorage.set('LoggedIn', false)
      this.loggedIn = SessionStorage.getItem('LoggedIn')
      this.logoutUser()
    }
  }
}
</script>
