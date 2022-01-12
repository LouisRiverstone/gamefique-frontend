<template>
  <div class="form-floating mb-3">
    <Field
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      class="form-control form-control-lg form-input-custom"
      autocomplete="off"
    />
    <label class="form-label">{{ title }}</label>
    <ErrorMessage :name="name" class="error" />
  </div>
</template>

<script lang="ts">
import { Field, ErrorMessage } from "vee-validate";
import { v4 as uuidv4 } from "uuid";

export default {
  components: {
    Field,
    ErrorMessage,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    title: {
      required: true,
      type: String,
    },
  },
  computed: {
    id(): string {
      return uuidv4();
    },
  },
  methods: {
    test(e: any) {
      console.log(e);
    },
  },
};
</script>

<style scoped>
.form-input-custom {
  background-color: #e7e7e7;
  border: 2px transparent;
  font-weight: 700;
}

.form-label {
  font-weight: 700;
}

.form-input-custom:focus {
  background-color: #e7e7e7 !important;
  border: 2px transparent;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0);
}

.error {
  font-weight: 700;
  font-size: 12px;
  color: #e51400;
}
</style>