<script setup>
import { gsap } from "gsap";

let btn;
let menu;
let img;
let close;
let tl = gsap.timeline();

onMounted(() => {
    btn = document.getElementsByClassName('button');
    menu = document.getElementsByClassName('menu');
    img = document.getElementsByClassName('img-icon');
    close = document.getElementsByClassName('close');
})


function buttonClicked() {
    tl.to(img, {display: 'none', duration: 0.2 });
    tl.to(btn, { scaleX: 50, scaleY: 50, duration: 0.2 });
    tl.to(close, {display: 'block'})
    tl.to(menu, { display: 'block', position: 'fixed', y: 40, duration: 0.3 }); 
}

function closeMenu() {
    tl.reverse();
}

</script>
<template>
    <div class="rounded-full button m-1.5 cursor-pointer" @click="buttonClicked()">
        <img src="~assets/img/menu.svg" alt="menu icon" class="img-icon">
    </div>

    <img src="~assets/img/close.png" alt="close menu button" class="z-10 cursor-pointer close" @click="closeMenu()">

    <div class="menu ml-12 text-white text-xl">
        <ul>
            <li class="p-5 hover:underline"><NuxtLink to="/" @click="closeMenu()">Home</NuxtLink></li>
            <li class="p-5 hover:underline"><NuxtLink to="/about" @click="closeMenu()">About</NuxtLink></li>
            <li class="p-5 hover:underline"><NuxtLink to="/about/education" @click="closeMenu()">Education</NuxtLink></li>
            <li class="p-5 hover:underline"><NuxtLink to="/about/experience" @click="closeMenu()">Experience</NuxtLink></li>
            <li class="p-5 hover:underline"><NuxtLink to="/contact" @click="closeMenu()">Contacts</NuxtLink></li>
        </ul>
    </div>
</template>
<style scoped>
.button {
    z-index: 4;
    width: 40px;
    height: 40px;
    background-color: #b1a1c7;
    position: relative;
    transition: all .2s ease-in-out;
}
.menu {
    z-index: 5;
    display: none;
}
img {
    width: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.close {
    display: none;
    position: absolute;
    top: 5%;
    left: 2%;
}
</style>