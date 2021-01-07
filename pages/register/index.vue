<template>
    <div id="registerPage">
        <form id="registerForm">
            <label for="usernameInput">Username: </label>
            <input type="text" id="usernameInput" v-model="username" autocomplete="off">
            <label for="passwordInput">Password: </label>
            <input type="password" id="passwordInput" v-model="password">
            <label for="confirmPasswordInput">Confirm Password: </label>
            <input type="password" id="confirmPasswordInput" v-model="confirmPassword">
            <input type="submit" @click="register">
        </form>
        <nuxt-link to="/login">Login</nuxt-link>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            username: '',
            password: '',
            confirmPassword: ''
        }
    },
    mounted() {
        document.getElementById('registerForm').addEventListener('submit', (event) => {
            event.preventDefault()
        })
    },
    methods: {
        async register() {
            const user = await axios.post(`${process.env.API_URL}/auth/signup`, {
                username: this.username,
                password: this.password
            })
            if (user)
                console.log('Registered Successfully')
            else
                console.log('Failed to Register')
        }
    }
}
</script>

<style>

</style>