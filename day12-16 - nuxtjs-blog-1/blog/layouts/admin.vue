<template>
  
  <div class= "wrapper">
    <Header />
    <div class="wrapper-content wrapper-content--fixed">
    <Intro title="Admin page"> 
        <nuxt-link to="/admin" class="link linkWhite">Admin</nuxt-link>
        <nuxt-link to="/admin/new-post" class="link linkWhite">New-post</nuxt-link>
        <nuxt-link to="/admin/comments" class="link linkWhite">Comments</nuxt-link>
        <span @click="logOutUser" class="link linkWhite">Logout</span>
    </Intro>
    <Nuxt /> 
    </div>
  </div>
</template>

<script>
import Header from '@/components/system/Header.vue'
export default{
  components: {Header},
  middleware: ['auth'],
  methods: {
    logOutUser() {
      this.$store.dispatch('logOutUser')
        .then(()=>{
            this.$router.push('/admin/auth')
          }) 
    }
  }
}

</script>

