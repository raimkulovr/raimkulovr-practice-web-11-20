<template>
    <div class="wrapper-content wrapper-content--fixed">
      <section>
        <div class="container">

          <div class="error" v-if="error">
            <p>{{error}}</p>
          </div>

          <search :value="search" placeholder="type username" @search="search = $event" />
          
          <button v-if="!repos" class="btn btnPrimary" @click="getRepos">Search</button>
          <button v-else class="btn btnPrimary" @click="getRepos" >Search Again</button>
          
          <div class="repos-head" v-for="profEl in prof" :key="profEl.index">
              <img :src="profEl.data.avatar_url" alt="avatar">

              <div class="repos-head-item">  
                <span>login: {{profEl.data.login}}</span><br>
                <a :href="profEl.data.url" class="link">go to profile</a>
              </div>
          </div>

          <div class="repos-wrapper" v-if="repos">
            
            <div class="repo-item" v-for="repo in repos" :key="repo.id">
              

              <div class="repos-info">
                <a target="_blank" :href="repo.html_url" class="link">{{repo.name}}</a>
                <span> {{repo.stargazers_count}} ⭐</span>
              </div>

            </div>
          </div>
            
        </div>
      </section>
    </div>
</template>

<script>
import search from '@/components/Search.vue'
import axios from 'axios'

export default {
  components: {search},
  data(){
    return{
      search: '',
      error: null,
      repos: null,
      prof: []
    }
  },
  methods: {
    getRepos(){
      axios 
        .get(`https://api.github.com/users/${this.search}/repos`)
          .then(res => {
            this.error = null
            this.repos = res.data
          })
          .catch(err=> {
            console.log(err)
            this.repos=null
            this.error="Can't find this user"
          })
      axios
        .get(`https://api.github.com/users/${this.search}`)
          .then(resPr => {
            this.error=null
            this.prof=[]
            this.prof.push(resPr)
            
          })
          .catch(err=> {
            console.log(err)
            this.prof=null
            this.error="Can't find this user"
          })
      console.log(this.prof)
    },
    getProfile(){
      console.log("yeah its profile button")
    }
  }
  
}
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  align-items: center;
  flex-direction: column;
}

button{
  margin-top: 30px;
}

.repos-wrapper{
  width: 600px;
  margin: 30px 0;
}

.repos-info{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #dbdbdb;
}

.error{
  margin-bottom: 20px;
  color: rgb(207, 52, 52);
}
img{
    height:150px;
    width: 150px;
  }
.repos-head{
  margin-top: 40px;
  width: 600px;
  max-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  
}

.repos-head-item{
  margin-left: 40px;
  
    font-size: 30px;
  
}
</style>