<template>
<div>
  <p>{{messageToBeFiltered | shout |reply(' :(')}}</p>
  <form @submit.prevent="submit">
    <input type="email" placeholder="What's your email" v-model="email" :class="{ error: $v.email.$error}" @blur="$v.email.$touch()">
    <div v-if="$v.email.error">
      <p v-if="!$v.email.email" class="errorMessage">This is not a valid email address</p>
      <p v-if="!$v.email.required" class="errorMessage">Email is a required field</p>
    </div>
    <button :disabled="$v.invalid" type="submit">Submit</button>
    <p v-if="$v.$anyError" class="errorMessage">Please fill out the required fields</p>
  </form>
</div>
</template>
    
<script>
import {required, email} from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      email: null,
      messageToBeFiltered: 'Such is life at it\'s peak, I am not much more than I was before',
    };
  },
  validations: {
    email: {
      required,
      email,
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        console.log('Form Submitted', this.email);
      }
    },
  },
  filters: {
    shout(value) {
      return value.toUpperCase();
    },
    reply(value, name) {
      return value + ', ' + name;
    },
  },
};
</script>
