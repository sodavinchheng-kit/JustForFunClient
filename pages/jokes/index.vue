<template>
  <div id="test">
      <button @click="getJokes">Click Here</button>
      <div>{{ jokes }}</div>

      <div id="posts" v-for="post in posts" :key="post.id">
          <h4>{{ post.title }}</h4>
          <p>{{ post.body }}</p>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            jokes: '<<Joke Here>>',
            posts: []
        }
    },
    created() {
        this.getPosts()
    },
    methods: {
        async getJokes() {
            try {
                const jokes = await axios.get('https://icanhazdadjoke.com/slack')
                this.jokes = jokes.data.attachments[0].text
                console.log(this.jokes)
            }  catch (err) {
                console.log(err)
            }
        },
        async getPosts() {
            try {
                const posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
                this.posts = posts.data
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>

<style>

</style>