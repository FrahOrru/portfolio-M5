import { storeToRefs } from "pinia";
import { useUserStore } from "~~/stores/user";

export default defineNuxtRouteMiddleware((to, from) => {
    const userStore = useUserStore();
    const { isLogged } = storeToRefs(userStore);

    if(isLogged) {
        navigateTo(to.path, {redirectCode: 301})
    }
})