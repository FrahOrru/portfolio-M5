<script setup lang="ts">
import { ExperienceItem } from '~/library/types';

const props = defineProps<{background: Boolean, element: ExperienceItem}>()
</script>
<template>
    <div class="p-5 block w-72 h-80 text-white text-center">
        <h3 class="text-2xl">{{ element!.title }}</h3>
        <h5 class="pb-4">{{ element!.company }}</h5>
        <p> {{ element!.description }}</p>
    </div>
</template>
<style scoped>
.block {
    background-color: rgb(61, 19, 114, 0.4);
    margin: auto;
}
</style>