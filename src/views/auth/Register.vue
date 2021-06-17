<template>
    <div>
        <div class="col-sm-12 col-md-6 col-xxl-3">
            <Register />
        </div>
        <img src="@/assets/auth/kidplaying.jpeg" class="bg d-none d-sm-block" />
    </div>
</template>

<script>
import Register from "@/components/auth/Register.vue";

export default {
    components: {
        Register,
    },
};
</script>

<style scoped>
.bg {
    min-height: 100%;
    min-width: 1024px;
    width: 100vw;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    filter: blur(3px) brightness(0.5);
    -webkit-filter: blur(3px) brightness(0.5);
}
</style>