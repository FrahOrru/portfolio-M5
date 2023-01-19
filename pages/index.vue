<script setup>
definePageMeta({
    layout: "without-name"
})

</script>
<template>
    <div>
        <img src="~assets/img/home.jpg" alt="personal picture" class="w-80 front-img">
        <div class="w-80 back-block"></div>
        <div class="title">
            <h2>Francesca Orrù</h2>
            <h4>Frontend developer</h4>
        </div>
        <div class="w-64 h-20 front-block"></div>
    </div>
</template>
<style scoped>
.front-block {
    z-index: 2;
    background-color: rgb(61, 19, 114, 0.4);
    position: absolute;
    top: 30%;
    left: 30%;
    transform: translate(-30%, -30%);
}
.front-img {
    z-index: 1;
    height: 450px;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.back-block {
    z-index: 0;
    height: 450px;
    background-color: rgb(61, 19, 114, 0.4);
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-45%, -45%);
}

h2,h4 {
    text-align: center;
}

.title {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 5%;
}
</style>