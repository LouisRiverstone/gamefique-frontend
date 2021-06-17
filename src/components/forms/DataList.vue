<template>
    <div class="mb-3">
        <input
            v-show="false"
            :name="name"
            type="number"
            :value="inputValue"
            @input="handleChange"
            @blur="handleBlur"
        />
        <div class="form-floating input-group">
            <input
                :id="id"
                type="text"
                v-model="searching"
                :placeholder="placeholder"
                class="form-control form-control-lg form-input-custom"
                autocomplete="off"
            />
            <label class="form-label">{{ title }}</label>
            <span class="input-group-text input-side">
                <transition name="fade">
                    <div
                        class="spinner-border text-info"
                        role="status"
                        v-show="loading"
                    >
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </transition>
            </span>
        </div>
        <div class="list-size" v-show="list.length > 0 && showList">
            <div class="list-group overflow-auto">
                <button
                    v-for="(item, i) in list"
                    :key="i"
                    type="button"
                    class="
                        list-group-item list-group-item-action list-group-button
                    "
                    @click.prevent="setValue(item)"
                >
                    {{ item[fieldName] }}
                </button>
            </div>
        </div>

        <small v-show="errorMessage || meta.valid" class="text-danger fw-light">
            {{ errorMessage }}
        </small>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useField } from "vee-validate";
import { v4 as uuidv4 } from "uuid";
export default defineComponent({
    props: {
        type: {
            type: String,
            default: "text",
        },
        value: {
            type: String,
            default: "",
        },
        name: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            required: false,
        },
        endpoint: {
            type: Function,
            required: true,
        },
        fieldName: {
            type: String,
            required: true,
        },
    },
    setup(props: any) {
        const {
            value: inputValue,
            errorMessage,
            handleBlur,
            handleChange,
            setErrors,
            meta,
        } = useField(props.name, undefined, {
            initialValue: props.value,
        });
        return {
            handleChange,
            handleBlur,
            errorMessage,
            inputValue,
            setErrors,
            meta,
            id: uuidv4(),
        };
    },
    data() {
        return {
            list: [],
            searching_query: "",
            selected: {},
            showList: true,
            loading: false,
        };
    },
    computed: {
        searching: {
            get(): string {
                return this.searching_query;
            },
            async set(text: string): Promise<void> {
                if (text != this.searching_query) {
                    this.showList = true;
                }
                if (text.length > 3) {
                    try {
                        this.loading = true;
                        const { data } = await this.endpoint(text);
                        this.list = data;
                    } catch (error) {
                        this.setErrors(error.message);
                    } finally {
                        this.loading = false;
                    }
                }
                this.searching_query = text;
            },
        },
    },
    methods: {
        setValue(selected: any) {
            this.inputValue = selected.id;
            this.showList = false;
            this.selected = selected;
            this.searching = selected[this.fieldName];
        },
    },
});
</script>

<style scoped>
.form-input-custom {
    background-color: #e7e7e7;
    border: 2px transparent;
    font-weight: 700;
}

.form-label {
    font-weight: 700;
}

.form-input-custom:focus {
    background-color: #e7e7e7 !important;
    border: 2px transparent;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0);
}

.list-size {
    max-height: 300px;
    border: 2px transparent !important;
    overflow-y: auto;
}

.input-side {
    border: 2px transparent !important;
    background-color: #e7e7e7 !important;
}

.list-group-button {
    background-color: #e7e7e7 !important;
}

.list-group-button:hover {
    background-color: #eee !important;
}
</style>