<template>
    <section class="mb-5">
        <Background />
        <CardInformation class="card-info" ref="cardInformation" />
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import api from "@/api";
import CardInformation from "@/components/profile/CardInformation.vue";
import Background from "@/components/profile/Background.vue";

export default defineComponent({
    components: {
        CardInformation,
        Background,
    },
    computed: {
        me(): any {
            return this.$store.getters["user"];
        },
        cardInformation(): any {
            return this.$refs.cardInformation;
        },
    },
    methods: {
        async load() {
            try {
                this.$emit("loading-show");
                if (this.$route.params.id) {
                    const user = await api.user.show(this.$route.params.id);
                    const loaded = await this.cardInformationLoad(user?.data);
                } else {
                    const loaded = await this.cardInformationLoad(this.me);
                }
            } catch (error) {
                console.error(error);
            } finally {
                this.$emit("loading-hide");
            }
        },
        cardInformationLoad(user: any) {
            return new Promise((resolve, reject) => {
                let intervaler = setInterval(() => {
                    if (this.cardInformation) {
                        this.cardInformation.load(user);
                        clearInterval(intervaler);
                        resolve(true);
                    }
                }, 100);
            });
        },
    },
    mounted() {
        this.load();
    },
});
</script>

<style scoped>
.card-info {
    margin-top: -300px;
    margin-left: auto;
    margin-right: auto;
    z-index: 100;
}
</style>