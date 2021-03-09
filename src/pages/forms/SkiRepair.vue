<template>
  <div class="q-pa-lg" style="padding: 5% 10% 10% 10%">
      <div class="q-pa-sm row"><h4 style="margin: 0">Repair Order</h4></div>
      <hr>
      <br>
      <q-form @submit="onSubmit" class="q-gutter-md">
        <div class="q-pa-sm row"><q-input v-model="responseToSubmit.data.name" filled type="name" hint="Name" /></div>
        <div class="q-pa-sm row"><q-input v-model="responseToSubmit.data.tel" filled type="tel" hint="Telephone number" /></div>
        <div class="q-pa-sm row"><q-input v-model="responseToSubmit.data.date" filled type="date" hint="Date Needed" /></div>
        <div class="q-pa-sm row"><q-input v-model="responseToSubmit.data.brand" filled type="brand" hint="Ski Brand" /></div>
        <div class="q-pa-sm row"><q-checkbox v-model="responseToSubmit.data.hotwaxski" label="Hot Wax-Ski ($15)" /></div>
        <div class="q-pa-sm row"><q-checkbox v-model="responseToSubmit.data.waxandedges" label="Wax and Edges ($25)" /></div>
        <div class="q-pa-sm row"><q-checkbox v-model="responseToSubmit.data.board" label="Board ($20)"/></div>
        <div class="q-pa-sm row"><q-checkbox v-model="responseToSubmit.data.basictune" label="Basic Tune ($35) – Includes P-Tex, Belt Sand, Edges, Wax" /></div>
        <div class="q-pa-sm row"><q-checkbox v-model="responseToSubmit.data.fulltune" label="Full Tune ($50) – Includes P-Tex, Belt Sand, Edges, Wax, Stone Grind" /></div>
        <br>
        <div class="q-pa-sm row"><q-btn label="Submit" type="submit" color="primary"/></div>
      </q-form>
      </div>
</template>

<script>
import { mapActions } from 'vuex'
import { sendSignInLink } from 'src/functions/send-email-link'
import { SessionStorage } from 'quasar'

export default {
  beforeMount: function () {
    console.log(this.$store)
    this.$store.commit('forms/setCurrentForm', 'ski-repair')
  },
  data () {
    return {
      showSendLink: SessionStorage.getItem('formVisited'),
      sendEmail: '',
      responseToSubmit: {
        formId: 'ski-repair',
        data: {
          name: '',
          tel: '',
          date: '',
          brand: '',
          hotwaxski: false,
          waxandedges: false,
          board: false,
          basictune: false,
          fulltune: false
        }
      }
    }
  },
  methods: {
    ...mapActions('forms', ['addResponse']),
    onSubmit () {
      this.addResponse(this.responseToSubmit)
      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Submitted'
      })
    },
    sendLink () {
      console.log('email', this.sendEmail)
      sendSignInLink(this.sendEmail)
    }
  }
}
</script>
