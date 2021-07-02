<template>
    <div class="spacement">
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a
                    class="navbar-brand"
                    href="#"
                    @click.prevent="$router.push({ name: 'Home' })"
                    >Navbar</a
                >
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a
                                class="nav-link active"
                                aria-current="page"
                                href="#"
                                @click.prevent="
                                    $router.push({
                                        name: 'PostList',
                                    })
                                "
                            >
                                Postagens</a
                            >
                        </li>
                        <li class="nav-item" v-if="logged">
                            <a
                                class="nav-link active"
                                aria-current="page"
                                href="#"
                                @click.prevent="
                                    $router.push({ name: 'PostEditor' })
                                "
                                >Nova Postagem</a
                            >
                        </li>
                        <li class="nav-item" v-if="logged">
                            <a
                                class="nav-link active"
                                aria-current="page"
                                href="#"
                                >{{ user.first_name }}</a
                            >
                        </li>
                        <li class="nav-item" v-if="!logged">
                            <a
                                class="nav-link active"
                                aria-current="page"
                                href="#"
                                @click.prevent="$router.push({ name: 'Login' })"
                                >Entrar</a
                            >
                        </li>
                        <li class="nav-item" v-if="!logged">
                            <a
                                class="nav-link active"
                                aria-current="page"
                                href="#"
                                @click.prevent="
                                    $router.push({ name: 'Register' })
                                "
                                >Registrar</a
                            >
                        </li>
                        <li class="nav-item" v-if="logged">
                            <a
                                class="nav-link active"
                                aria-current="page"
                                href="#"
                                @click.prevent="logout"
                            >
                                Sair</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    computed: {
        user() {
            return this.$store.getters["user"];
        },
        logged() {
            return this.user?.email ? true : false;
        },
    },
    methods: {
        logout() {
            this.$store.dispatch("logout");
            this.$router.go();
        },
    },
});
</script>

<style scoped>
.spacement {
    margin-bottom: 55px;
}
.nav {
    background-color: #111111;
    color: #fff;
}
</style>