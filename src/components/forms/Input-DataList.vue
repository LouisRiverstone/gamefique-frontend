<template>
    <div class="mb-4">
        <label :for="name" class="form-label">{{ label }}</label>

        <div>
            <input
                v-show="false"
                id="datalist-input"
                :name="name"
                type="number"
                :value="inputValue"
                @input="handleChange"
                @blur="handleBlur"
            />
            <input
                id="datalist-input"
                type="text"
                v-model="searching"
                :placeholder="placeholder"
                class="form-control input"
                autocomplete="off"
                :class="{ 'has-error': !!errorMessage }"
            />
            <div class="datalist mt-2" v-show="showList">
                <div
                    v-for="(item, i) in list"
                    :key="i"
                    @click.prevent="setValue(item)"
                    class="datalist-item"
                >
                    {{ item[fieldName] }}
                </div>
            </div>
        </div>

        <small v-show="errorMessage || meta.valid" class="text-danger fw-light">
            {{ errorMessage }}
        </small>
    </div>
</template>

<script lang="ts">
import { useField } from "vee-validate";
import { v4 as uuidv4 } from "uuid";

export default {
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
        label: {
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
            meta,
        } = useField(props.name, undefined, {
            initialValue: props.value,
        });

        return {
            handleChange,
            handleBlur,
            errorMessage,
            inputValue,
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
        };
    },
    computed: {
        searching: {
            get(): string {
                return this.searching_query;
            },
            async set(text: string) {
                if (text != this.searching_query) {
                    this.showList = true;
                }

                if (text.length > 3) {
                    try {
                        const { data } = await this.endpoint(text);
                        this.list = data;
                    } catch (error) {
                        console.error(error);
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
};
</script>

<style scoped>
.has-error {
    border: 2px solid #dc3545 !important;
}
.input {
    border-radius: 0px;
    padding: 0.5rem;
    border: 1px solid #ced4da;
}

.datalist-item {
    padding: 0.5rem;
    border: 1px solid #ced4da !important;
    font-size: 0.7rem;
}

.datalist-item:hover {
    background-color: #ced4da;
}
</style>
