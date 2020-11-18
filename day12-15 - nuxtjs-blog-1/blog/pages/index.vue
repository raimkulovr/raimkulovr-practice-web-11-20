<template>
  <div class="wrapper-content wrapper-content--fixed">
    <promo />
    <intro title="My last posts:"/>
    <postsList :posts="posts"/>
  </div>
</template>

<script>
import promo from '@/components/Promo.vue'
import intro from '@/components/UI/Intro.vue'
import postsList from '@/components/Blog/PostsList.vue'

export default {
  components: {promo, intro, postsList},
  data() {
    return{
      posts: [
        {
          id: 1,
          title: '1 post',
          descr: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
          img: 'https://cdn.discordapp.com/attachments/650962642999050252/778524560289955871/p0278f0f.jpg'
        },
        {
          id: 2,
          title: '2 post',
          descr: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
          img: 'https://cdn.discordapp.com/attachments/650962642999050252/778524582340460574/GettyImages-84888205.jpg'
        },
        {
          id: 3,
          title: '3 post',
          descr: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
          img: 'https://cdn.discordapp.com/attachments/650962642999050252/778524569661079582/73001e0f6b369a6e23e1e17dcbaa1158.png'
        }

      ]
    }
  }

}


</script>


