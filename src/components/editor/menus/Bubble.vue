<template>
  <bubble-menu
    class="bubble-menu"
    :tippy-options="{ duration: 100 }"
    :editor="editor"
    v-if="editor"
  >
    <div
      class="d-flex flex-column px-3 py-3"
      style="background-color: rgba(0, 0, 0, 0.3); border-radius: 2px"
    >
      <div class="d-flex justify-content-between mb-2">
        <button
          @click="editor.chain().focus().toggleBold().run()"
          class="badge text-dark mx-1"
          :class="{
            'bg-info': editor.isActive('bold'),
            'bg-light': !editor.isActive('bold'),
          }"
        >
          Negrito
        </button>

        <button
          @click="editor.chain().focus().toggleItalic().run()"
          class="badge text-dark mx-1"
          :class="{
            'bg-info': editor.isActive('italic'),
            'bg-light': !editor.isActive('italic'),
          }"
        >
          Itálico
        </button>
        <button
          @click="editor.chain().focus().toggleStrike().run()"
          class="badge text-dark mx-1"
          :class="{
            'bg-info': editor.isActive('strike'),
            'bg-light': !editor.isActive('strike'),
          }"
        >
          Tachado
        </button>
        <button
          @click="editor.chain().focus().toggleHighlight().run()"
          class="badge text-dark mx-1"
          :class="{
            'bg-info': editor.isActive('highlight'),
            'bg-light': !editor.isActive('highlight'),
          }"
        >
          Marca texto
        </button>
      </div>

      <div class="d-flex justify-content-between">
        <button
          @click="editor.chain().focus().setTextAlign('left').run()"
          class="badge text-dark mx-1"
          :class="{
            'bg-info': editor.isActive('left'),
            'bg-light': !editor.isActive('left'),
          }"
        >
          Esquerda
        </button>
        <button
          @click="editor.chain().focus().setTextAlign('center').run()"
          class="badge text-dark mx-1"
          :class="{
            'bg-info': editor.isActive('center'),
            'bg-light': !editor.isActive('center'),
          }"
        >
          Centralizar
        </button>
        <button
          @click="editor.chain().focus().setTextAlign('right').run()"
          class="badge text-dark mx-1"
          :class="{
            'bg-info': editor.isActive('right'),
            'bg-light': !editor.isActive('right'),
          }"
        >
          Direita
        </button>
        <button
          @click="editor.chain().focus().setTextAlign('justify').run()"
          class="badge text-dark mx-1"
          :class="{
            'bg-info': editor.isActive('justify'),
            'bg-light': !editor.isActive('justify'),
          }"
        >
          Justificar
        </button>
      </div>
    </div>
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