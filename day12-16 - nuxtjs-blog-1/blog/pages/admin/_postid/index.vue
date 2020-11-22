<template>
    <newPostForm :postEdit="post" @submit="onSubmit" />
</template>

<script>
import axios from 'axios'
import newPostForm from '@/components/Admin/NewPostForm.vue'
export default {
    components: {newPostForm},
    layout: 'admin',
    asyncData(contex) {
        return axios.get(`https://blog-nuxt-e2074.firebaseio.com/posts/${contex.params.postid}.json`)
            .then(res=>{
                return {
                    post: {...res.data, id: contex.params.postid}
                }
            })
            .catch(e=>contex.error(e))
  },
    methods: {
        onSubmit(post) {
            console.log('Post edit')
            this.$store.dispatch('editPost', post)
                .then(()=>{
                    this.$router.push('/admin')
                })
        }
    } 
}
</script>