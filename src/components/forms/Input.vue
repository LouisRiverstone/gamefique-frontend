<template>
    <div class="mb-4">
        <label :for="name" class="form-label">{{ label }}</label>
        <input
            :name="name"
            :id="name"
            :type="type"
            :value="inputValue"
            :placeholder="placeholder"
            @input="handleChange"
            @blur="handleBlur"
            class="form-control input"
            :class="{ 'has-error': !!errorMessage }"
        />
        <small v-show="errorMessage || meta.valid" class="text-danger fw-light">
            {{ errorMessage || successMessage }}
        </small>
    </div>
</template>

<script lang="ts">
import { useField } from "vee-validate";

export default {
    props: {
        type: {
            type: String,
            default: "text",
        },
        value: {
            type: String,
            default: "",
        },
        name: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            required: false,
        },
        successMessage: {
            type: String,
            default: "",
        },
    },
    setup(props: any) {
        const {
            value: inputValue,
            errorMessage,
            handleBlur,
            handleChange,
            meta,
        } = useField(props.name, undefined, {
            initialValue: props.value,
        });

        return {
            handleChange,
            handleBlur,
            errorMessage,
            inputValue,
            meta,
        };
    },
};
</script>

<style scoped>
.has-error {
    border: 2px solid #dc3545 !important;
}
.input {
    border-radius: 0px;
    padding: 0.5rem;
    border: 1px solid #ced4da;
}
</style>
