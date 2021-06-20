<template>
    <button
        :type="type"
        :disabled="disabled"
        class="btn btn-outline-secondary btn-lg mt-3 font"
    >
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        type: {
            required: true,
            type: String,
        },
        disabled: {
            default: false,
            type: Boolean,
        },
    },
});
</script>

<style scoped>
.font {
    font-weight: 500;
    font-size: 14px;
}
</style>