<template>
    <div class="dropdown mt-3">
        <button
            class="btn btn-outline-secondary dropdown-toggle font"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
        >
            <label class="form-label"> <slot name="text"></slot></label>
        </button>
        <slot name="list"></slot>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
.font {
    font-weight: 500;
    font-size: 14px;
}
</style>