<template>
    <PromptAnswer></PromptAnswer>
</template>

<script>
import { mapGetters } from 'vuex'
import PromptAnswer from 'components/Form/PromptAnswer.vue'

export default {
  components: { PromptAnswer },
  computed: {
    ...mapGetters('forms', ['getForms'])
  },
  data () {
    return {
    }
  }
}
</script>
