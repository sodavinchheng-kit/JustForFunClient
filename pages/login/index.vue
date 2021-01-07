<template>
  <div id="loginPage">
      <form id="loginForm">
          <label for="usernameInput">Username: </label>
          <input type="text" id="usernameInput" v-model="username" autocomplete="off">
          <label for="passwordInput">Password: </label>
          <input type="password" id="passwordInput" v-model="password">
          <input type="submit" value="Login" @click="login">
      </form>
      <nuxt-link to="/register">Register</nuxt-link>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    mounted() {
        document.getElementById('loginForm').addEventListener('submit', (event) => {
            event.preventDefault()
        })
    },
    methods: {
        ...mapActions({
            setUser: 'auth/setUser'
        }),
        async login() {
            try {
                const auth = await axios.post(`${process.env.API_URL}/auth/login`, {
                    username: this.username,
                    password: this.password
                })
                if (auth.data.auth) {
                    this.setUser(auth.data)
                    this.$router.push('/jokes')
                }
                else
                    console.log('Login Failed')
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>

<style>

</style>