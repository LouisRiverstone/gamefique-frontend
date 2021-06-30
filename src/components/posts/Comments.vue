<template>
    <section v-for="(comment, i) in comments" :key="i">
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
                        <div class="row name-micro">
                            {{ comment.user.first_name }}
                        </div>
                        <div class="row subs-micro">
                            {{ comment.user.formation_courses.name }}
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
                        {{ comment.comment }}
                    </p>
                </div>
            </div>

            <div class="row pe-5">
                <div class="d-flex justify-content-end">
                    <p class="subs-micro">
                        {{ getDate(comment.created_at, comment.updated_at) }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import moment from "moment";

export default {
    props: {
        comments: {
            type: Array,
            required: true,
        },
    },
    methods: {
        getDate(created_at: string, updated_at: string): string {
            if (created_at != updated_at) {
                return `Atualizado em ${moment(updated_at).format(
                    "dd/mm/yyyy hh:mm"
                )}`;
            }

            return `Criado em ${moment(created_at).format("DD/MM/YYYY HH:mm")}`;
        },
    },
};
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