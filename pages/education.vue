<script setup lang='ts'>
import { ExperienceItem } from '~/library/types';

const { data, pending, error, refresh } = await useFetch('http://localhost:3000/api/education', {
    onResponse({ request, response, options }) {
    // Process the response data
    return response._data
  },
});
</script>
<template>
    <div class="grid grid-cols-3 grid-row-2 gap-x-5 content-center">
        <img src="~assets/img/education.png" alt="programming background image" class="w-full col-start-1 col-end-4 row-start-1 row-end-2 background">
        <ExperienceBlock :background="true" :element="data.educations[0]" class="row-start-1 col-start-1"></ExperienceBlock>
        <ExperienceBlock :background="true" :element="data.educations[0]" class="row-start-1 col-start-2"></ExperienceBlock>
        <ExperienceBlock :background="true" :element="data.educations[0]" class="row-start-1 col-start-3"></ExperienceBlock>
        <h1 class="ml-5 mt-5">Education</h1>
    </div>
</template>
<style scoped>
.background{
    height: 32rem;
}
</style>