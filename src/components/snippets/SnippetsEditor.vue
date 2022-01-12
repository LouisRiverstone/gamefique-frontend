<template>
  <section class="my-3">
    <div class="d-flex justify-content-end my-2">
      <button
        type="button"
        class="btn btn-outline-secondary"
        @click.prevent="add"
      >
        <img src="@/assets/icons/add-file.svg" />
      </button>
    </div>

    <div class="accordion" id="accordion_snippets" v-if="ready">
      <div v-for="(snippet, s) in snips" :key="s" class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#code-${s}`"
            aria-expanded="true"
            :aria-controls="`code-${s}`"
          >
            {{ snippet.name }}
          </button>
        </h2>
        <div
          :id="`code-${s}`"
          class="accordion-collapse collapse show"
          :aria-labelledby="`code-${s}`"
          data-bs-parent="#accordion_snippets"
        >
          <div
            class="
              d-flex
              justify-content-between
              align-items-center
              my-editor
              py-2
              px-3
            "
          >
            <div class="d-flex">
              <input type="text" v-model="snippet.name" />
              <select v-model="snippet.programming_language_id">
                <option :value="null" disabled>Selecione</option>
                <option
                  v-for="(language, l) in languages"
                  :key="l"
                  :value="language.id"
                >
                  {{ language.name }}
                </option>
              </select>
            </div>
            <div class="d-flex">
              <a href="" @click.prevent="remove(s)">
                <img src="@/assets/icons/remove-file.svg" />
              </a>
            </div>
          </div>

          <prism-editor
            class="my-editor"
            v-model="snippet.content"
            :highlight="highlighter"
            line-numbers
          ></prism-editor>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import api from "@/api";
import { defineComponent } from "vue";
import axios from "axios";
import { url } from "@/plugins/axios";

import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css"; // import syntax highlighting styles

export default defineComponent({
  components: {
    PrismEditor,
  },
  props: {
    snippets: {
      type: Array,
    },
  },
  data() {
    return {
      ready: false,
      url: url,
      languages: [],
      snips: this.snippets,
    };
  },
  methods: {
    async populateSnippets() {
      for (let i = 0; i < this.snips.length; i++) {
        const file = await this.getFile(
          `${this.url}/uploads/${this.snips[i].link}${this.snips[i].programming_language.file_extension}`
        );

        this.snips[i].code = file;
        this.snips[i].content = file;
      }

      this.ready = true;
    },
    async getFile(file) {
      const { data } = await axios.get(file);
      return data;
    },
    async mount() {
      this.languages = (await api.programming_languages.list()).data;
      await this.populateSnippets();
    },
    highlighter(code) {
      return highlight(code, languages.js); //returns html
    },
    remove(index) {
      this.snips = this.snips.filter((snippet, s) => {
        return s != index;
      });
    },
    add() {
      this.snips.push({
        content: null,
        name: "Sem nome",
        programming_language_id: null,
      });
    },
    // highlighter(code, language) {
    //   const lang = languages[language.replace(".", "")];
    //   const highlighted = highlight(code, lang);
    //   return highlighted;
    // },
  },
  mounted() {
    this.mount();
  },
  watch: {
    snips: {
      deep: true,
      handler(val) {
        this.$emit("setSnippets", val);
      },
    },
  },
});
</script>


<style scoped>
/* required class */
.my-editor {
  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
  background: #2d2d2d;
  color: #ccc;

  /* you must provide font-family font-size line-height. Example: */
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}
</style>
