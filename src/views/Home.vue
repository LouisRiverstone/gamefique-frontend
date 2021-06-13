<template>
  <div class="home">
    <Register></Register>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Register from "../components/auth/Register.vue";

export default defineComponent({
  name: "Home",
  components: {
    Register,
  },
});
</script>
