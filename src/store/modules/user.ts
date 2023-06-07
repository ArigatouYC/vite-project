import { defineStore } from "pinia";
// import { reqLogin } from "@/api/user";

let userStore = defineStore('User', {
    state: () => {
        return {
            token : localStorage.getItem("TOKEN")
        }
    },

    actions: {

    },

    getters: {

    }
})

export default userStore