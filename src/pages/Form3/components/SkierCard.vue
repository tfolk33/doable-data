<template>
  <q-card class="skier-card">
    TEST
  </q-card>
</template>

<script>
export default {
  props: {
    skier: {
      info: {
        type: Number,
        rider: String,
        age: Number,
        height: Number,
        weight: Number
      },
      gear: {
        bootsModel: String,
        bindingType: String,
        sole: {
          length: Number,
          type: String,
          ageGroup: String
        },
        skierCode: String,
        skiSnowboard: String,
        poles: String,
        helmet: String,
        techSignature: String,
        boots: String
      }
    }
  }
}
</script>

<style scoped>
.skier-card {
  width: 750px;
}
</style>
