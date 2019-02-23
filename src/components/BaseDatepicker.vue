<template>
    <div>
        <label v-if="label">{{label}}</label>
        <DatePicker :value="value" @input="updateValue" v-bind="$attrs" v-on="listeners"/>
    </div>
</template>

<script>
import DatePicker from 'vuejs-datepicker';
import {formFieldMixin} from '../shared/mixins/formFieldMixin.js';

export default {
  mixins: [formFieldMixin],
  components: {
    DatePicker,
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue,
      };
    },
  },
  methods: {
    // Overwritting the method we got from the mixin. 
    updateValue(event) {
      this.$emit('input', event);
    },
  },
};
</script>
