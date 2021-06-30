<template>
    <transition name="fade">
        <div class="bg">
            <div class="loading gradient" v-if="showing">
                <div
                    class="spinner-border"
                    style="width: 3rem; height: 3rem"
                    role="status"
                >
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            showing: false,
        };
    },
    methods: {
        show() {
            this.showing = true;
        },
        hide() {
            this.showing = false;
        },
    },
});
</script>

<style scoped>
/* Absolute Center */
.loading {
    position: fixed;
    z-index: 9999;
    overflow: show;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 50px;
    height: 50px;
}

.loading:before {
    content: "";
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
}

.bg {
    background-color: #000;
}
.gradient {
    color: white;
    animation: gradient 10s ease infinite;
}

@keyframes gradient {
    0% {
        color: #ee7752;
    }
    12.5% {
        color: #e73c7e;
    }
    25% {
        color: #23a6d5;
    }
    37.5% {
        color: #23d5ab;
    }
    50% {
        color: #23d5ab;
    }
    62.5% {
        color: #23a6d5;
    }
    75% {
        color: #e73c7e;
    }
    100% {
        color: #ee7752;
    }
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
