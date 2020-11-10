<template>
    <div class="new-note">
            <label>Title</label>
            <div class="title-header">
            <input v-model="note.title" type="text">
            <select v-model="note.priority">
                  <option selected>ordinary</option>
                  <option>medium</option>
                  <option>important</option>
                </select>
            </div>
            <label>Description</label>
            <textarea v-model="note.descr" style="margin-bottom: 30px"></textarea>
            
                
            
            <button class="btn btnPrimary newNoteButton" @click="addNote">New note</button>
            
    </div>
</template>

<script>
export default {
    props: {
        note: {
            type: Object,
            required: true
        },
        
    },
    methods: {
        addNote(){
            this.$emit('addNote', this.note)
        },
       
    },
    
}

</script>

<style lang="scss">

.new-note{
    text-align: center
    }

.newNoteButton{
    margin: 10px
}
.title-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    &>input{
        width: 69%;
        
    }
    &>select{
        min-width: 30%;
        padding: 16px 26px;
        border-radius: 14px;
        margin-bottom: 30px;
    }
    
    &>option{
        min-height: 10px;
        background-color: green;
    }
}
</style>