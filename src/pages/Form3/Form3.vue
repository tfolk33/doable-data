<template>
  <q-page padding>
    <div class="text-h3 q-pa-md text-center">Rental Agreement</div>
    <q-card class="card">
      <q-card-section class="text-center"
        >Personal Responsible for Equipment</q-card-section
      >
      <q-card-section>
        <q-input outlined v-model="firstName" label="First Name" />
        <q-input outlined v-model="lastName" label="Last Name" />
        <q-input outlined v-model="address" label="Home Address Street" />
        <q-input outlined v-model="city" label="City" />
        <q-input outlined v-model="state" label="State" />
        <q-input outlined v-model="zip" label="ZIP" />
      </q-card-section>
    </q-card>
    <div class="q-mx-auto q-my-xl text-center">
      <q-btn icon="add" label="Add Skier" @click="addSkier()"/>
      <div v-for="(skier, index) in skiers" :key="index">
        <skier-card></skier-card>
      </div>
    </div>
  </q-page>
</template>
<script>
import SkierCard from './components/SkierCard.vue'

export default {
  components: {
    SkierCard
  },
  data () {
    return {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zip: null,
      skiers: []
    }
  },
  methods: {
    addSkier () {
      var newSkier = {
        name: '',
        age: 10
      }

      this.skiers.push(newSkier)
    }
  }
}
</script>

<style scoped>
.card {
  max-width: 750px;
  margin: 0 auto;
}
</style>
