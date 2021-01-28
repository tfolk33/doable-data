<template>
    <div class="col q-mb-sm">
        <q-item-label
            class="row q-mb-sm text-h4">
            What is your child's average GPA over quarter 4?
        </q-item-label>
        <q-input
            outlined
            :value="answer"
            @input="$emit('update:answer', $event)"
            class="row"
            :rules="[val => !!val || 'field is required']"
            ref="answer"
            autofocus
            label="Answer prompt above"
            clearable/>
    </div>
</template>

<script>
export default {
  props: ['answer']
}
</script>
