import { storeToRefs } from "pinia";
import { useUserStore } from "~~/stores/user";

const userStore = useUserStore();
const { isLogged } = storeToRefs(userStore);

export default defineNuxtRouteMiddleware((to, from) => {
    if(isLogged) {
        navigateTo(to.path, {redirectCode: 301})
    }
})