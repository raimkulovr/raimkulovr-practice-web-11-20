<template>
  <div class="wrapper"> 
    <div class="wrapper-content">
      <section>
        <div class="container">
          <h1>{{title}}</h1>
        
        <!-- new note -->
        <message v-if="message" :message="message" />
        <newNote  :note="note" @addNote="addNote" />
        
        <!-- note list -->
        <notes :notes="notes" @remove="removeNote" />

        </div>
      </section>
    </div>
  </div>
</template>

<script>
import message from '@/components/message.vue'
import newNote from '@/components/newNote.vue'
import notes from '@/components/notes.vue'
export default {
  components: {
    message,
    newNote,
    notes
  },
  data(){
    return{
      title: 'Notes App',
      message: null,
      note: {
          title: '',
          descr: '',
            },
      notes: [
          {
            title: '1st Note',
            descr: 'Description for 1st note',
            date: new Date(Date.now()).toLocaleString()
          },
          {
            title: '2nd Note',
            descr: 'Description for 2nd note',
            date: new Date(Date.now()).toLocaleString()
          },
          {
            title: '3rd Note',
            descr: 'Description for 3rd note',
            date: new Date(Date.now()).toLocaleString()
          }
      ]
    }
  },
    methods: {
            addNote(){
                console.log(this.note)
                let {title, descr} = this.note
                if (title === '') {
                    this.message = 'title can`t be empty!'
                    return false
                }
                this.notes.push({
                    title,
                    descr,
                    date: new Date(Date.now()).toLocaleString()
                    
                })
                this.message = null
                this.note.title = ''
                this.note.descr = ''
            },
            removeNote(index){
              this.notes.splice(index, 1)
            }
        },

}
</script>

<style>

</style>
