<template>
    <div class="form-floating mb-3">
        <Field
            :name="name"
            as="select"
            :multiple="multiple"
            class="form-control form-control-lg form-input-custom"
            :class="{ 'multiple-field': multiple }"
        >
            <option value="" disabled v-if="!multiple">
                {{ selectDescription || "Selecione" }}
            </option>
            <option
                v-for="(option, i) in options"
                :key="i"
                :value="option[keyValue]"
            >
                {{ option[keyDescription] }}
            </option>
        </Field>
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
        value: {
            required: false,
        },
        name: {
            type: String,
            required: true,
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
        keyValue: {
            required: true,
            type: String,
        },
        keyDescription: {
            required: true,
            type: String,
        },
        options: {
            required: true,
            type: Array,
        },
        selectDescription: {
            type: String,
        },
        multiple: {
            default: false,
            type: Boolean,
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

.multiple-field {
    height: auto !important;
}

.multiple-field option :checked {
    background-color: red;
}

.error {
    font-weight: 700;
    font-size: 12px;
    color: #e51400;
}
</style>