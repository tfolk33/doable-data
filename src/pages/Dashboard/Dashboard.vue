<template>
  <div class="q-pa-md">
    <div class="text-h3">Forms</div>
    <q-list bordered separator class="rounded-borders q-my-md">
      <q-item v-for="(form, index) in forms" :key="index">
        <q-item-section>
          {{ form }}
        </q-item-section>
        <q-item-section top side>
          <div class="q-gutter-xs">
            <q-btn flat color="primary" icon="bar_chart" label="View Data" />
            <q-btn flat color="primary" icon="link" label="Copy Link" />
          </div>
        </q-item-section>

      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  data () {
    return {
      forms: [
        'Test 1',
        'Test 2',
        'Test 3'
      ]
    }
  }
}
</script>
