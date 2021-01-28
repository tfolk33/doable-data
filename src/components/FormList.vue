<template>
    <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Forms
        </q-item-label>
        <FormLink
          v-for="(form, key) in forms"
          :key="key"
          :title="form.title"
          :id="form.id"
        />
    </q-list>
</template>

<script>
import FormLink from 'components/FormLink.vue'

export default {
  components: { FormLink },
  props: ['forms']
}
</script>
