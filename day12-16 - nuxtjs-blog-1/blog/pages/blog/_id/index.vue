<template>
    <div class="wrapper-content wrapper-content--fixed">
    <post :post="post" />
    <comments :comments="comments"/>
    <newComment />
  </div>
</template>

<script>
import post from '@/components/Blog/Post.vue'
import newComment from '@/components/Comments/NewComment.vue'
import comments from '@/components/Comments/Comments.vue'

export default {
    components: {post, comments, newComment},
    data() {
        return{
            post: {
                id: 1,
                title: '1 post',
                descr: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
                img: 'https://cdn.discordapp.com/attachments/650962642999050252/778524560289955871/p0278f0f.jpg'
            },
            comments: [
                {name: 'Mark', text: 'loremipsum. ipsum dolor sit amet consectetur adipisicing'},
                {name: 'Anon', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'}
            ]
        }
    }
}
</script>

<style lang="scss">
.post{
    max-width: 900px;
    margin: 0 auto;
}

.post-header {
    text-align: center;
    margin-bottom: 30px;
    img{
        max-width: 400px;
        margin-bottom: 16px;
    }
    p{
        color: #999;
    }
}

.post-body{
    text-align: left;
}
</style>