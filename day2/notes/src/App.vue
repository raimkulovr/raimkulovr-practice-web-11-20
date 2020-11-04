<template>
  <div class="wrapper"> 
    <div class="wrapper-content">
      <section>
        <div class="container">
          <h1>{{title}}</h1>
        
        <!-- new note -->
        <div class="new-note" style="padding-bottom: 10px; padding-left: 10px;">
            <input v-model="note.title" type="text">
            <textarea v-model="note.descr"></textarea>
            <button @click="addNote">New note</button>
        </div>
        <div class="message" v-if="message">
            <p>{{message}}</p>
        </div>
        <!-- note list -->
        <div class="notes" >
            <div class="note" v-for="(note, index) in notes" :key="index" style="border: 4px double black; padding: 10px;">
                <div class="note-header">
                    <p>{{note.title}}</p>
                </div>
                <div class="note-body">
                    <p>{{note.descr}}</p>
                    <span>{{note.date}}</span>
                </div>
            </div>
        </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
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
            }
        },
}
</script>

<style>

</style>
