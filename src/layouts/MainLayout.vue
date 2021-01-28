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
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout'
}
</script>
