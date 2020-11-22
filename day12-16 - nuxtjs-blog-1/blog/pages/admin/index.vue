<template>
  
    <PostsList :admin=true :posts="posts"/>
    
</template>

<script>
export default {
  layout: 'admin',
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