import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      name: 'John Doe',
      email: 'johndoe@email.com',
    }
  },
  getters: {},
  actions: {},
})
