<template>
    <div class="row">
        <div class="col mb-3">
            <span><b>Objetivos:</b></span>
            <ul>
                <li
                    v-for="(objective, i) in class_plan.class_plan_objectives"
                    :key="i"
                >
                    {{ objective.description }}
                </li>
            </ul>
        </div>
    </div>
    <div class="row mb-3">
        <div class="col">
            <span><b>Duração:</b></span>
            <ul>
                <li>{{ class_plan.duration }}</li>
            </ul>
        </div>
    </div>
    <div class="row mb-3">
        <div class="col">
            <span><b>Atividades:</b></span>
            <ul>
                <li
                    v-for="(activities, i) in class_plan.class_plan_activities"
                    :key="i"
                >
                    {{ activities.description }}
                </li>
            </ul>
        </div>
    </div>
    <div class="row mb-3">
        <div class="col">
            <span><b>Estratégias:</b></span>
            <ul>
                <li
                    v-for="(strategy, i) in class_plan.class_plan_strategies"
                    :key="i"
                >
                    {{ strategy.description }}
                </li>
            </ul>
        </div>
    </div>
    <div class="row mb-3">
        <div class="col">
            <span><b>Recursos:</b></span>
            <ul>
                <li
                    v-for="(resource, i) in class_plan.class_plan_resources"
                    :key="i"
                >
                    {{ resource.description }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        class_plan: {
            type: Object,
        },
    },
});
</script>

<style>
</style>