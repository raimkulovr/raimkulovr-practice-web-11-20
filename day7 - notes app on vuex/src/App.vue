<template>
  <div class="wrapper"> 
    <div class="wrapper-content">
      <section>
        <div class="container">
          
        
        <!-- new note -->
        <message v-if="message" :message="message" />
        <newNote  :note="note" @addNote="addNote"/>

        <div class="note-header"  style="margin: 36px 0">
          <!-- title -->
          <h1>{{title}}</h1>

          <!-- search -->
          <search 
          :value="search" 
          placeholder="Find your note" 
          @search="search = $event"
          
          />

          <!-- icon controls -->
          <div class="icons">
            <svg :class="{active: grid}" @click="grid = true" style="cursor: pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            <svg :class="{active: !grid}" @click="grid = false" style="cursor: pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
          </div>
        </div>
        
        
        <!-- note list -->
        <notes :notes="notesFilter" :grid="grid" @remove="removeNote"/>

        </div>
      </section>
    </div>
  </div>
</template>

<script>
import message from '@/components/message.vue'
import newNote from '@/components/newNote.vue'
import notes from '@/components/notes.vue'
import search from '@/components/Search.vue'
export default {
  components: {
    message, newNote, notes, search
  },
  data(){
    return{
      title: 'Notes App',
      search: '',
      message: null,
      grid: true,
      note: {
          title: '',
          descr: '',
          priority: 'ordinary',
            },
      notes: []
      
    }
  },
  created() {
    this.notes = this.$store.getters.getNotes
  },
  computed: {
    notesFilter() {
      let array = this.notes,
        search = this.search
      if(!search) return array
      
      //lowercase
      search = search.trim().toLowerCase()

      //filter
      array=array.filter(function(item) {
        if(item.title.toLowerCase().indexOf(search) !== -1){
          return item
        }
      })
      //error
      return array
    }
  },
  methods: {
          addNote(){
            
              let {title, descr, priority} = this.note
              if (title === '') {
                  this.message = 'title can`t be empty!'
                  return false
              }
              if(priority ===''){
                this.message = 'priority can`t be empty!'
                return false
              }
              
              console.log(priority)
              this.$store.dispatch('addNote', {
                  title,
                  descr,
                  priority,
                  date: new Date(Date.now()).toLocaleString()                  
              })
              
              this.message = null
              this.note.title = ''
              this.note.descr = ''
              this.note.priority = 'ordinary'
          },
          removeNote(index){
            this.notes.splice(index, 1)
          },
      },

}
</script>

<style>

</style>
