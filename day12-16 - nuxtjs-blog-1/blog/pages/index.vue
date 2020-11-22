<template>
  <div class="wrapper-content wrapper-content--fixed">
    <promo />
    <Intro title="My last posts:"/>
    <PostsList :posts="posts"/>
    <contacts />
  </div>
</template>

<script>
import promo from '@/components/Promo.vue'
import contacts from '@/components/Contacts.vue'

export default {
  components: {promo, contacts},
  data() {
    return{
      posts: [
        {
          id: 1,
          title: '1 post',
          descr: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
          img: 'https://cdn.discordapp.com/attachments/650962642999050252/778524560289955871/p0278f0f.jpg'
        },
        
      ]
    }
  }

}


</script>


