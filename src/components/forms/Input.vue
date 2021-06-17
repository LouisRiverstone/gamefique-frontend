<template>
    <div class="form-floating mb-3">
        <Field
            :name="name"
            :type="type"
            :placeholder="placeholder"
            class="form-control form-control-lg form-input-custom"
            autocomplete="off"
        />
        <label class="form-label">{{ title }}</label>
        <ErrorMessage :name="name" />
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
        title: {
            required: true,
            type: String,
        },
    },
    computed: {
        id() {
            return uuidv4();
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
</style>