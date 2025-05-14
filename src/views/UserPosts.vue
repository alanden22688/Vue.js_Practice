<template>
    <div>
        <h3>{{ userName }} 的帖子列表</h3>
        <ul v-if="posts">
            <li v-for="post in posts" :key="post.id">
                {{ post.title }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: null
        }
    },
    props: {
        userName: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            required: true
        }
    },
    async created() {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts?userId=${this.userId}`
        )
        this.posts = await res.json()
    }
}
</script>