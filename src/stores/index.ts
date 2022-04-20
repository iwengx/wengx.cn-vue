import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
   state: () => ({
      count: 0,
   }),
   getters: {},
   actions: {
      increment() {
         this.count++;
      },
   },
});
