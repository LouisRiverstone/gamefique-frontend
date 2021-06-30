<template>
    <div v-if="editor">
        <div v-html="saved" />
        <editor-content :editor="editor" />
        <Button :type="button" @click.prevent="save">Salvar</Button>
    </div>
</template>

<script>
import { Editor, EditorContent, VueNodeViewRenderer } from "@tiptap/vue-3";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import CodeBlockComponent from "./CodeBlockComponent";
import Button from "@/components/forms/Button.vue";

import { lowlight, registeredLanguages } from "@/plugins/lowlight-languages";

export default {
    components: {
        EditorContent,
        Button,
    },
    data() {
        return {
            editor: null,
            saved: "<h1>Teste</h1>",
        };
    },
    mounted() {
        this.editor = new Editor({
            extensions: [
                Document,
                Paragraph,
                Text,
                CodeBlockLowlight.extend({
                    addNodeView() {
                        return VueNodeViewRenderer(CodeBlockComponent);
                    },
                }).configure({ lowlight, registeredLanguages }),
            ],
            content: `
     
        <pre><code class="language-csharp">
          string text = "Olá Mundo";
          Debug.Log("Texto: " + text);
        </code></pre>
      
      `,
        });
        console.log(this.editor);
    },
    methods: {
        save() {
            this.saved = this.editor.getHTML();
        },
    },
};
</script>

<style lang="scss">
/* Basic editor styles */
.ProseMirror {
    > * + * {
        margin-top: 0.75em;
    }

    pre {
        background: #0d0d0d;
        color: #fff;
        font-family: "JetBrainsMono", monospace;
        padding: 0.75rem 1rem;

        code {
            color: inherit;
            padding: 0;
            background: none;
            font-size: 0.8rem;
        }

        .hljs-comment,
        .hljs-quote {
            color: #616161;
        }

        .hljs-variable,
        .hljs-template-variable,
        .hljs-attribute,
        .hljs-tag,
        .hljs-name,
        .hljs-regexp,
        .hljs-link,
        .hljs-name,
        .hljs-selector-id,
        .hljs-selector-class {
            color: #f98181;
        }

        .hljs-number,
        .hljs-meta,
        .hljs-built_in,
        .hljs-builtin-name,
        .hljs-literal,
        .hljs-type,
        .hljs-params {
            color: #fbbc88;
        }

        .hljs-string,
        .hljs-symbol,
        .hljs-bullet {
            color: #b9f18d;
        }

        .hljs-title,
        .hljs-section {
            color: #faf594;
        }

        .hljs-keyword,
        .hljs-selector-tag {
            color: #70cff8;
        }

        .hljs-emphasis {
            font-style: italic;
        }

        .hljs-strong {
            font-weight: 700;
        }
    }
}
</style>