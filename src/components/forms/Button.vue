<template>
    <button
        :type="type"
        :disabled="disabled"
        class="btn btn-outline-secondary btn-lg mt-3"
    >
        {{ name }}
    </button>
</template>

<script lang="ts">
export default {
    props: {
        type: {
            required: true,
            type: String,
        },
        name: {
            required: true,
            type: String,
        },
        disabled: {
            default: false,
            type: Boolean,
        },
    },
};
</script>

<style>
</style>