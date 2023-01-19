<script setup>
// import middle from '~~/middleware/middle';

// definePageMeta({
//     middleware: middle
// })
</script>

<template>
    <div class="flex">
        <div class="contact-form w-full">
            <form class="w-full max-w-lg">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Email
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="message">
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Full Name
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder="example@example.it">
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Message
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="textarea" placeholder="message">
                    </div>
                </div>
            </form>
            <button class="text-white font-bold py-2 px-4 rounded-full button-send">
                Send Message
            </button>
        </div>
        <div class="right-block absolute right-0">
            <ul class="flex flex-col flex-wrap content-around text-white h-full mx-0 my-auto">
                <li class="py-8">Barcelona</li>
                <li class="py-8">+39 3425438960</li>
                <li class="py-8">francesca.orru00@outlook.it</li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
.button-send{
    background-color: rgb(61, 19, 114, 0.4);
}
.right-block {
    width: 27rem;
    height: 100%;
    background-color: rgb(61, 19, 114, 0.4);
}
</style>