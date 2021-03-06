<template>
  <form @submit.prevent="createEvent">
    <BaseSelect
      class="field"
      label="Select a category"
      :options="categories"
      v-model="event.category"
      :class="{error: $v.event.category.$error}"
      @blur="$v.event.category.$touch()"
    />
    <template v-if="$v.event.category.$error">
      <p v-if="!$v.event.category.required" class="errorMessage">Category is required</p>
    </template>

    <h3>Name & describe your event</h3>
    <BaseInput
      class="field"
      label="Title"
      v-model="event.title"
      type="text"
      placeholder="Title"
      :class="{error: $v.event.title.$error}"
      @blur="$v.event.title.$touch()"
    />
    <template v-if="$v.event.title.$error">
      <p v-if="!$v.event.title.required" class="errorMessage">Title is required</p>
    </template>

    <BaseInput
      class="field"
      label="Description"
      v-model="event.description"
      type="text"
      placeholder="Add a description"
      :class="{error: $v.event.description.$error}"
      @blur="$v.event.description.$touch()"
    />
    <template v-if="$v.event.description.$error">
      <p v-if="!$v.event.description.required" class="errorMessage">Description is required</p>
    </template>

    <h3>Where is your event?</h3>
    <BaseInput
      class="field"
      label="Location"
      v-model="event.location"
      type="text"
      placeholder="Add a location"
      :class="{error: $v.event.location.$error}"
      @blur="$v.event.location.$touch()"
    />
    <template v-if="$v.event.location.$error">
      <p v-if="!$v.event.location.required" class="errorMessage">Location is required</p>
    </template>

    <BaseDatepicker
      class="field"
      label="Date"
      v-model="event.date"
      placeholder="Select a date"
      :input-class="{error: $v.event.date.$error}"
      @opened="$v.event.date.$touch()"
    />
    <template v-if="$v.event.date.$error">
      <p v-if="!$v.event.date.required" class="errorMessage">Date is required</p>
    </template>

    <BaseSelect
      class="field"
      label="Select a time"
      :options="times"
      v-model="event.time"
      :class="{error: $v.event.time.$error}"
      @blur="$v.event.time.$touch()"
    />
    <template v-if="$v.event.time.$error">
      <p v-if="!$v.event.time.required" class="errorMessage">Time is required</p>
    </template>

    <BaseButton :disabled="$v.$anyError" type="submit" buttonClass="-fill-gradient">Submit</BaseButton>
    <p v-if="$v.$anyError" class="errorMessage">Please fill out the required fields</p>
  </form>
</template>

<script>
import NProgress from 'nprogress';
import Event from '../shared/models/event.js';
import {required} from 'vuelidate/lib/validators';

export default {
  data() {
    const times = [];
    for (let i = 0; i <= 24; i++) {
      times.push(i + ':00');
    }

    return {
      times,
      categories: this.$store.state.categories,
      event: new Event(),
    };
  },
  validations: {
    event: {
      category: {required},
      title: {required},
      description: {required},
      location: {required},
      date: {required},
      time: {required},
    },
  },
  methods: {
    createEvent() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        NProgress.start();
        this.event.date = this.event.date.getTime();
        this.$store
            .dispatch('event/createEvent', this.event)
            .then(() => {
              this.$router.push({
                name: 'event-show',
                params: {id: this.event.id},
              });
              this.event = new Event();
            })
            .catch(() => {
              NProgress.done();
            });
      }
    },
  },
};
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
