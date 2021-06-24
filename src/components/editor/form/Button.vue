<template>
    <button type="button" :disabled="disabled" class="btn btn-editor font">
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
        loading: {
            type: Boolean,
            default: false,
        },
    },
});
</script>

<style scoped>
.font {
    font-weight: 700;
    font-size: 24px;
}
</style>