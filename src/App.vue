<template>
    <div>
        <Navbar v-if="$route.name != 'Home'" />
        <transition name="fade">
            <router-view
                @loading-show="loader.show()"
                @loading-hide="loader.hide()"
            />
        </transition>
        <Loader ref="loader" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Loader from "@/components/utils/Loader.vue";
import Navbar from "@/components/navbar/Navbar.vue";

export default defineComponent({
    components: {
        Loader,
        Navbar,
    },
    computed: {
        loader() {
            return this.$refs.loader;
        },
    },
});
</script>



<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

body {
    background-color: #f1f1f1 !important;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
