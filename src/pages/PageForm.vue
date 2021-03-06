<template>
  <div class="q-pa-lg" style="padding: 5% 10% 10% 10%">
      <div class="q-pa-sm row"><h4 style="margin: 0">Repair Order</h4></div>
      <hr>
      <br>
      <q-form @submit="onSubmit" class="q-gutter-md">
        <div class="q-pa-sm row"><q-input v-model="name" filled type="name" hint="Name" /></div>
        <div class="q-pa-sm row"><q-input v-model="tel" filled type="tel" hint="Telephone number" /></div>
        <div class="q-pa-sm row"><q-input v-model="date" filled type="date" hint="Date Needed" /></div>
<<<<<<< HEAD
        <div class="q-pa-sm row"><q-input v-model="brand" hint="Ski Brand" /></div>
=======
        <div class="q-pa-sm row"><q-input v-model="brand" filled type="brand" hint="Ski Brand" /></div>
>>>>>>> 6e4c2b8d5c0b2670594323d7558cbfb21784f6b7
        <div class="q-pa-sm row"><q-checkbox v-model="hotwaxski" label="Hot Wax-Ski ($15)" /></div>
        <div class="q-pa-sm row"><q-checkbox v-model="waxandedges" label="Wax and Edges ($25)" /></div>
        <div class="q-pa-sm row"><q-checkbox v-model="board" label="Board ($20)"/></div>
        <div class="q-pa-sm row"><q-checkbox v-model="basictune" label="Basic Tune ($35) – Includes P-Tex, Belt Sand, Edges, Wax" /></div>
        <div class="q-pa-sm row"><q-checkbox v-model="fulltune" label="Full Tune ($50) – Includes P-Tex, Belt Sand, Edges, Wax, Stone Grind" /></div>
        <br>
        <div class="q-pa-sm row"><q-btn label="Submit" type="submit" color="primary"/></div>
      </q-form>
      </div>
</template>

<script>
export default {
  data () {
    return {
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
  },
  methods: {
    onSubmit () {
      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Submitted'
      })
    }
  }
}
</script>
