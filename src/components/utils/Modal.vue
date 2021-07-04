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
        <div class="modal" id="exampleModal" tabindex="-1">
            <div
                class="
                    modal-dialog modal-dialog-centered modal-dialog-scrollable
                "
            >
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
                    <!-- <div class="modal-footer">
                        <slot name="footer"></slot>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";

import Button from "@/components/forms/Button.vue";

export default defineComponent({
    props: {
        title: {
            required: true,
            type: String,
        },
    },
    components: {
        Button,
    },
});
</script>

<style scoped>
</style>