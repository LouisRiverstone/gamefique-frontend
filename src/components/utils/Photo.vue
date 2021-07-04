<template>
    <img v-if="photo" :src="`${url}/uploads/${photo}`" />
    <img v-else src="@/assets/auth/nophoto.png" />
</template>

<script>
import { defineComponent } from "vue";
import { url } from "@/plugins/axios";

export default defineComponent({
    props: {
        photo: {
            type: String,
        },
    },
    data() {
        return { url };
    },
});
</script>

<style>
</style>