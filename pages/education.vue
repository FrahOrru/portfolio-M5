<script setup lang='ts'>
import { ExperienceItem } from '~/library/types';

const edu1: ExperienceItem = {
    title: 'IT High school degree',
    company: 'ITT G. Marconi',
    description: 'Web development both with HTML/CSS/JS and through platforms like WordPress. Programming and development of applications (C#). database creation and data analysis'
}
const edu2: ExperienceItem = {
    title: 'Digital Academy',
    company: 'Academy Umana “Forma.Temp”',
    description: 'Introduction to Linux SQL and Oracle and PostgreSQL platforms Basic and advanced Java (Java application design/development)Testing techniques and software quality Web development and HTML5 Project management rules and best practices'
}
const edu3: ExperienceItem = {
    title: 'Frontend Bachelor',
    company: 'Harbour.space University',
    description: 'Programming Interactivity Foundations of Programming: JAVA Introduction to Vue.js Design Systems for Interactive Applications The Vue Ecosystem'
}

</script>
<template>
    <div class="grid grid-cols-3 grid-row-2 gap-x-5 content-center">
        <img src="~assets/img/education.png" alt="programming background image" class="w-full col-start-1 col-end-4 row-start-1 row-end-2 background">
        <ExperienceBlock :background="true" :element="edu1" class="row-start-1 col-start-1"></ExperienceBlock>
        <ExperienceBlock :background="true" :element="edu2" class="row-start-1 col-start-2"></ExperienceBlock>
        <ExperienceBlock :background="true" :element="edu3" class="row-start-1 col-start-3"></ExperienceBlock>
        <h1 class="ml-5 mt-5">Education</h1>
    </div>
</template>
<style scoped>
.background{
    height: 32rem;
}
</style>