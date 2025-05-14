<template>
    <div class="posts-sidebar">
      <h3>帖子統計</h3>
      <p>總數: {{ posts.length }}</p>
      <div v-if="topics.length">
        <h4>熱門主題</h4>
        <ul>
          <li v-for="topic in topics" :key="topic">
            {{ topic }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserPostsSidebar',
    data() {
      return {
        posts: [],
        topics: ['Vue', 'JavaScript', 'Web Development']
      }
    },
    computed: {
      userId() {
        return this.$route.params.userId
      }
    },
    async created() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${this.userId}`
      )
      this.posts = await response.json()
    }
  }
  </script>