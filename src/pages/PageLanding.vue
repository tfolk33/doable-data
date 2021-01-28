<template>
  <div  class="fullscreen bg-white text-white q-pa-md">
    <q-img
      :src="url"
      spinner-color="white"
      style="height: 140px; max-width: 150px"
    />

    <div class="text-h2 q-ma-md" style="opacity:.6">
        We are committed to bring your business into the digital age by creating and managing your forms to fill out yourself or send off for completion.
    </div>

    <div class="text-h2 q-ma-md" style="opacity:.6">
        Let us...
    </div>
    <div class ="text-h2 q-ma-md text-center">
        Take care of all the "Paperwork"
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data () {
    return {
      url: 'C:\\Users\\TFolk\\repos\\Quasar\\doable-data\\src\\DoableData.png'
    }
  }
}
</script>
