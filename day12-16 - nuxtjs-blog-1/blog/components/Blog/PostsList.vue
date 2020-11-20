<template>
    <section class="post-list">
        <div class="container">
            <div class="posts_wrapper">
                <postPreview v-for="post in posts" :key="post.id" :post="post"/>

            </div>
        </div>
    </section>
</template>

<script>
import postPreview from '@/components/Blog/PostPreview.vue'
export default {
    components: {postPreview},
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss">
.posts_wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>
