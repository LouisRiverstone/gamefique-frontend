<template>
    <section v-for="(p, i) in 5" :key="i">
        <div class="container card-post pt-3 mb-5">
            <div class="row mb-3">
                <div class="d-flex ms-4">
                    <div class="me-4">
                        <img
                            src="https://picsum.photos/500/500"
                            class="rounded microphoto"
                        />
                    </div>
                    <div class="">
                        <div class="row name-micro">Luiz Gustavo</div>
                        <div class="row subs-micro">
                            Licenciatura em Computação
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-3 mb-3">
                <div class="description"></div>
            </div>
            <div class="container mt-2 mb-2">
                <div class="container text-start">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Distinctio quas alias inventore eos perferendis.
                        Ea porro qui culpa sunt hic cum recusandae asperiores
                        temporibus laudantium, aliquid possimus inventore
                        perferendis aut!
                    </p>
                </div>
            </div>

            <div class="row pe-5">
                <div class="d-flex justify-content-end">
                    <p class="subs-micro">21/10/2021 21:30</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
.microphoto {
    height: 40px;
    width: 40px;
}
.name-micro {
    font-weight: 700;
    font-size: 14px;
}
.subs-micro {
    font-weight: 200;
    font-size: 12px;
}
.description {
    border-top: 1px solid #999;
}
.card-post {
    background-color: #ededed;
    border: 2px transparent;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0);
}
</style>