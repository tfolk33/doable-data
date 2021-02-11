<template>
    <form @submit.prevent="submitForm">
        <div class="row q-mb-md">
            <q-banner class="bg-grey-3 col">
                <template v-slot:avatar>
                    <q-icon name="account_circle" color="primary"/>
                </template>
                {{ tab | titleCase }} to access your forms anywhere!
            </q-banner>
        </div>

        <div class="row q-mb-md">
            <q-input
                v-model="formData.email"
                :rules="[val => isValidEmailAddress(val) || 'Please enter a valid email address']"
                lazy-rules
                ref="email"
                outlined
                class="col"
                label="Email"
                stack-label />
        </div>

        <div class="row q-mb-md">
            <q-input
                v-model="formData.password"
                :rules="[val => val.length >= 6 || 'Please enter at leaset 6 characters']"
                lazy-rules
                ref="password"
                type="password"
                outlined
                class="col"
                label="Password"
                stack-label />
        </div>

        <div class="row q-nb-md">
            <q-space />
            <q-btn
                color="primary"
                :label="tab"
                type="submit" />
        </div>
    </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['tab'],
  data () {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions('auth', ['registerUser', 'loginUser']),
    submitForm () {
      console.log(this.formData)
      this.$refs.email.validate()
      this.$refs.password.validate()

      if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
        if (this.tab === 'login') {
          this.loginUser(this.formData)
        } else {
          this.registerUser(this.formData)
        }
      }
    },
    isValidEmailAddress (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    }

  },
  filters: {
    titleCase (value) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>
