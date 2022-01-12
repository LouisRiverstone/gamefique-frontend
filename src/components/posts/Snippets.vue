<template>
  <section>
    <div v-if="ready">
      <div v-for="(snippet, s) in snips" :key="s" class="py-2">
        <div class="d-flex justify-content-between align-items-center">
          <h3>
            {{ snippet.name }}{{ snippet.programming_language.file_extension }}
          </h3>

          <div class="d-flex align-items-center">
            <a
              :href="`${url}/uploads/${snippet.link}${snippet.programming_language.file_extension}`"
              target="_blank"
            >
              <img src="@/assets/icons/download.svg" />
            </a>
          </div>
        </div>

        <div class="d-flex">
          <highlightjs
            :language="snippet.programming_language.name"
            :code="snippet.code"
            class="flex-grow-1"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import "highlight.js/lib/common";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import "highlight.js/styles/monokai.css";
import { url } from "@/plugins/axios";
import axios from "axios";

export default defineComponent({
  components: {
    highlightjs: hljsVuePlugin.component,
  },
  props: {
    snippets: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  computed: {
    url() {
      return url;
    },
  },
  data() {
    return {
      snips: this.snippets,
      ready: false,
    };
  },
  methods: {
    async populateSnippets() {
      for (let i = 0; i < this.snips.length; i++) {
        this.snips[i].code = await this.getFile(
          `${this.url}/uploads/${this.snips[i].link}${this.snips[i].programming_language.file_extension}`
        );
      }

      this.ready = true;
    },
    minifier(text) {
      return text.toLowerCase();
    },
    async getFile(file) {
      const { data } = await axios.get(file);
      return data;
    },
  },
  async mounted() {
    await this.populateSnippets();
  },
});
</script>

<style>
</style>