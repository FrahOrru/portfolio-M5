<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '~/stores/user';

let modal;
const username = ref('');
const password = ref('');

onMounted(() => {
    modal = document.getElementById('modal');
})

function onOpenModal() {
    modal.classList.remove('hidden')
}

const userStore = useUserStore();
const { isLogged, userName} = storeToRefs(userStore);
const { login } = userStore;

function onLogin() {
    login(username.value, password.value);
    close();
}
function close() {
    modal.classList.add('hidden')
}
</script>
<template>
    <div>
        <div v-if="isLogged">
            <span class="text-lg">{{ userName }}</span>
        </div>
        <div v-else>
            <button class="border border-grey rounded-lg p-2 fra-classe"
            @click="onOpenModal()">LOGIN</button>
        </div>

<!-- Main modal -->
<div id="modal" class="hidden relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity "></div>

        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:justify-center">
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">Login In your account</h3>
                    <div class="mt-2">
                        <form class="bg-white rounded px-8 pt-6 pb-8 mb-4">
                            <div class="mb-4">
                            <input 
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                            v-model="username">
                            </div>
                            <div class="mb-6">
                            <input 
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="******************"
                            v-model="password" >
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:flex sm:justify-end sm:px-6">
                <button
                    type="button"
                    class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    @click="close()"
                >Back</button>
                <button 
                    type="button"
                    class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" 
                    @click="onLogin()"
                >Login</button>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>
<style scoped>
.fra-classe:hover {
    background-color: rgb(61, 19, 114, 0.4);
    color: white;
}
</style>