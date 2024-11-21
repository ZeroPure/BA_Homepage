import { defineStore } from 'pinia'

export const useUserStore = defineStore('user',{
    state:() =>({
            isFirstOpen:true,
            totalVisitor:0
    }),
    actions:{
        setFirstOpen(value) {
            this.isFirstOpen = value;
        },
    }
})