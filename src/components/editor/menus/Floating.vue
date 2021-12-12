<template>
  <floating-menu
    class="floating-menu"
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
          @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
          class="badge text-dark mx-1"
          :class="{
            'bg-info': editor.isActive('heading', { level: 1 }),
            'bg-light': !editor.isActive('heading', { level: 1 }),
          }"
        >
          Título
        </button>

        <button
          @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
          class="badge text-dark mx-1"
          :class="{
            'bg-info': editor.isActive('heading', { level: 2 }),
            'bg-light': !editor.isActive('heading', { level: 2 }),
          }"
        >
          Subtítulo
        </button>
        <button
          @click="editor.chain().focus().toggleBulletList().run()"
          class="badge text-dark mx-1"
          :class="{
            'bg-info': editor.isActive('bulletList'),
            'bg-light': !editor.isActive('bulletList'),
          }"
        >
          Lista
        </button>
      </div>
    </div>
  </floating-menu>
</template>

<script>
import { FloatingMenu } from "@tiptap/vue-3";
export default {
  props: {
    editor: {
      required: true,
    },
  },
  components: {
    FloatingMenu,
  },
};
</script>

<style>
</style>