<script setup>
const props = defineProps({name: Boolean})
</script>
<template>
    <div class="flex flex-row">
        <div class="basis-1/6">
            <Menu></Menu>
        </div>
        <div class="basis-5/6">
            <h3 class="text-center" v-if="name">Francesca Orrù</h3>
        </div>
    </div>
</template>