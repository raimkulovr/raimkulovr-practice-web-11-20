<template>
    <newPostForm :postEdit="post" @submit="onSubmit" />
</template>

<script>
import newPostForm from "@/components/Admin/NewPostForm.vue"
export default {
    components: {newPostForm},
    layout: 'admin',
    data() {
        return{
            post: {
                id: 1,
                title: '1 post',
                descr: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
                img: 'https://cdn.discordapp.com/attachments/650962642999050252/778524560289955871/p0278f0f.jpg'
            }
        }
    },
    methods: {
        onSubmit(post) {
            console.log('Post edit')
            console.log(post)
        }
    } 
}
</script>