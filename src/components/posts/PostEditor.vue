<template>
    <Editor ref="editor" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Editor from "@/components/editor/Editor.vue";
export default defineComponent({
    components: {
        Editor,
    },
    computed: {
        editor(): any {
            return this.$refs.editor;
        },
    },
});
</script>

<style>
</style>