<template>
    <div class="wrapper-content wrapper-content--fixed">
      <section>
        <div class="container">

          <div class="notify-wrapper">
            <div class="notify-title">
              <p>Notify App</p>
              <svg @click="getNotify" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M7 9h-7v-7h1v5.2c1.853-4.237 6.083-7.2 11-7.2 6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.286 0-11.45-4.844-11.959-11h1.004c.506 5.603 5.221 10 10.955 10 6.071 0 11-4.929 11-11s-4.929-11-11-11c-4.66 0-8.647 2.904-10.249 7h5.249v1z"/></svg>

            </div>
            
            <div class="notify-content">
              <!-- <preloader  :width="90" :height="90"/> -->

              <notify 
                
                :messages="messages"
                />
            </div>
            
         
         
          </div>
        </div>
      </section>
    </div>
</template>

<script>
//import axios from 'axios'
import notify from '@/components/Notify.vue'
import preloader from '@/components/UI/Preloader.vue'

export default {
  components: {notify, preloader},
  data() {
    return{
      
    }
  },
  mounted() {
    this.$store.dispatch('getNotify')
  },
  computed: {
    messages() {
      return this.$store.getters.getMessage
    }
  },
  methods: {}
    
}
</script>

<style lang="scss" scoped>
  .container{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
  }
  .notify-wrapper{
    width: 400px;
    background-color: #ffffff;
    padding: 30px;
    border-radius: 16px;
    box-shadow: 0 12px 22px 0 rgba(0,0,0,.1);

  }
  .notify-content{
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 300px;
  }

  .notify-title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    
    p {
      font-size: 24px;
      // font-weight: bold;
    }
  }
</style>