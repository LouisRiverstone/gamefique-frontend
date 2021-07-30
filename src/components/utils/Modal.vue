<template>
    <div>
        <Button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
        >
            {{ title }}
        </Button>

        <!-- Modal -->

        <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                            {{ title }}
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>

                    <div class="modal-body">
                        <slot name="body"></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Button from "@/components/forms/Button.vue";
import { v4 as uuidv4 } from "uuid";

export default defineComponent({
    props: {
        title: {
            required: true,
            type: String,
        },
    },
    computed: {
        id(): string {
            return uuidv4();
        },
    },
    components: {
        Button,
    },
});
</script>

<style scoped>
</style>