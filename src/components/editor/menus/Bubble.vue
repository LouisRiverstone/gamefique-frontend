<template>
    <bubble-menu
        class="bubble-menu"
        :tippy-options="{ duration: 100 }"
        :editor="editor"
        v-if="editor"
    >
        <button
            @click="editor.chain().focus().toggleBold().run()"
            :class="{ 'is-active': editor.isActive('bold') }"
        >
            Bold
        </button>
        <button
            @click="editor.chain().focus().toggleItalic().run()"
            :class="{ 'is-active': editor.isActive('italic') }"
        >
            Italic
        </button>
        <button
            @click="editor.chain().focus().toggleStrike().run()"
            :class="{ 'is-active': editor.isActive('strike') }"
        >
            Strike
        </button>
        <button
            @click="editor.chain().focus().toggleHighlight().run()"
            :class="{ 'is-active': editor.isActive('highlight') }"
        >
            highlight
        </button>
        <button
            @click="editor.chain().focus().setTextAlign('left').run()"
            :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"
        >
            left
        </button>
        <button
            @click="editor.chain().focus().setTextAlign('center').run()"
            :class="{
                'is-active': editor.isActive({ textAlign: 'center' }),
            }"
        >
            center
        </button>
        <button
            @click="editor.chain().focus().setTextAlign('right').run()"
            :class="{
                'is-active': editor.isActive({ textAlign: 'right' }),
            }"
        >
            right
        </button>
        <button
            @click="editor.chain().focus().setTextAlign('justify').run()"
            :class="{
                'is-active': editor.isActive({ textAlign: 'justify' }),
            }"
        >
            justify
        </button>
    </bubble-menu>
</template>

<script>
import { BubbleMenu } from "@tiptap/vue-3";

export default {
    props: {
        editor: {
            required: true,
        },
    },
    components: {
        BubbleMenu,
    },
};
</script>

<style>
</style>