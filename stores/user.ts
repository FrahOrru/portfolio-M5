import { defineStore } from "pinia";

export const useUserStore = defineStore('user', () => {

    const name = ref('');
    const logged = ref(false);

    const userName = computed(() => name.value);
    const isLogged = computed(() => logged.value)

    function login(_name: string, _password: string) {

        useFetch('http://localhost:3000/api/login', {
            query: { _name, _password },
            onResponse({ request, response, options }) {
                console.log(response._data.logged)
            if(response._data.logged) {
                logged.value = true;
                name.value = _name;
                console.log('siii', logged.value)
            }
              },
        })
    }

    return { userName, isLogged, login }
})