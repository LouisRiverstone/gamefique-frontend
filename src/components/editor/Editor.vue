<template>
    <div class="editor">
        <div v-if="editor">
            <StandardMenu :editor="editor" />
            <BubbleMenu :editor="editor" />
            <FloatingMenu :editor="editor" />
        </div>
        <div class="row">
            <editor-content :editor="editor" class="editor-content" />
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";

import StandardMenu from "./menus/Standard.vue";
import BubbleMenu from "./menus/Bubble.vue";
import FloatingMenu from "./menus/Floating.vue";

export default defineComponent({
    components: {
        EditorContent,
        BubbleMenu,
        FloatingMenu,
        StandardMenu,
    },

    data() {
        return {
            editor: null,
        };
    },

    mounted() {
        this.editor = new Editor({
            extensions: [
                StarterKit,
                TextAlign.configure({
                    types: ["heading", "paragraph"],
                }),
                Highlight,
            ],
            content: ``,
        });
    },
});
</script>

<style lang="scss" scoped>
.btn-info {
    color: #fff !important;
}

.editor-content {
    border-right: 1px solid #ddd;
    border-left: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
}

/* Basic editor styles */
.ProseMirror {
    > * + * {
        margin-top: 0.75em;
    }

    ul,
    ol {
        padding: 0 1rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        line-height: 1.1;
    }

    code {
        background-color: rgba(#616161, 0.1);
        color: #616161;
    }

    pre {
        background: #0d0d0d;
        color: #fff;
        font-family: "JetBrainsMono", monospace;
        padding: 0.75rem 1rem;
        border-radius: 0.5rem;

        code {
            color: inherit;
            padding: 0;
            background: none;
            font-size: 0.8rem;
        }
    }

    img {
        max-width: 100%;
        height: auto;
    }

    blockquote {
        padding-left: 1rem;
        border-left: 2px solid rgba(#0d0d0d, 0.1);
    }

    hr {
        border: none;
        border-top: 2px solid rgba(#0d0d0d, 0.1);
        margin: 2rem 0;
    }
}
</style>
