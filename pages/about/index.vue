<template>
    <div class="grid grid-cols-3 gap-x-5">
            <img src="~assets/img/about.jpg" alt="personal picture" class="w-96 col-start-1 row-start-1 row-end-3 about-img">
            <div class="block h-24"></div>
            <h1 class="text-center col-start-2 col-end-4">About</h1>
            <AboutText class="col-start-2 col-end-4"></AboutText>
    </div>
</template>
<style>
    .about-img {
        z-index: 0;
        height: 35rem;
        margin-top: 10%;
    }
    .block {
        z-index: 1;
        width: 27rem;
        position: absolute;
        left: 0;
        bottom: 15%;
        transform: translate(0, -15%);
        background-color: rgb(61, 19, 114, 0.4);
    }
</style>