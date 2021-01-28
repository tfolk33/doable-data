<template>
    <div class="q-gutter-y-md">
        <q-card>
            <q-tabs
            v-model="tab"
            class="text-grey text-h4"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
            >
                <q-tab name="analyze" label="Analyze" />
                <q-tab name="input" label="Input" />
                <q-tab name="send" label="Send" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="analyze">
                    <div class="text-h6">Analyze</div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </q-tab-panel>

                <q-tab-panel name="input">
                    <FormInput></FormInput>
                </q-tab-panel>

                <q-tab-panel name="send">
                    <div class="text-h6">Send</div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </q-tab-panel>
            </q-tab-panels>
        </q-card>
    </div>
</template>

<script>
import FormInput from 'components/FormInput.vue'

export default {
  components: { FormInput },
  data () {
    return {
      tab: 'analyze'
    }
  }
}
</script>
