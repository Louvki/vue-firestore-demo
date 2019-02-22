<template>
    <div>
      <label v-if="label">{{label}}</label>
      <select :value="value" @input="updateValue" v-bind="$attrs" v-on="listeners">
         <option disabled value="">Please select one</option>
        <option v-for="opt in options" :value="opt" :key="opt" :selected="opt === value">{{ opt }}</option>
      </select>
    </div>
</template>

<script>
import {formFieldMixin} from '../shared/mixins/formFieldMixin.js';

export default {
  mixins: [formFieldMixin],
  props: {
    options: {
      type: Array,
      required: true,
    },
  },     
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue,
      };
    },
  },
};
</script>
