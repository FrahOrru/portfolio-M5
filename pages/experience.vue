<script setup lang='ts'>
import { ExperienceItem } from '~/library/types';

const { data, pending, error, refresh } = await useFetch('http://localhost:3000/api/experience', {
    onResponse({ request, response, options }) {
    // Process the response data
    return response._data
  },
});
</script>
<template>
    <div class="grid grid-cols-3 gap-x-5 content-center">
        <img src="~/assets/img/experience.png" alt="experience page decorative picture" class="h-full absolute right-0">
        <ExperienceBlock :background="false" :element="data.experiences[0]" class="row-start-1 col-start-1"></ExperienceBlock>
        <ExperienceBlock :background="false" :element="data.experiences[1]" class="row-start-1 col-start-2"></ExperienceBlock>
        <ExperienceBlock :background="false" :element="data.experiences[2]" class="row-start-2 col-start-1"></ExperienceBlock>
        <div class="decorative-block h-24 absolute right-0"></div>
    </div>
</template>
<style scoped>
.decorative-block {
        z-index: 1;
        width: 27rem;
        bottom: 15%;
        transform: translate(0, -15%);
        background-color: rgb(61, 19, 114, 0.4);
}
</style>