<template>
    <div class="notes" >
            <div class="note" v-for="(note, index) in notes" :key="index">
                <div class="note-header">
                    <p>{{note.title}}</p>
                    <p style="cursor: pointer" @click="removeNote(index)">x</p>
                </div>
                <div class="note-body">
                    <p>{{note.descr}}</p>
                    <span>{{note.date}}</span>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    props: {
        notes: {
            type: Array,
            required: true
        }
    },
    methods: {
        removeNote(index){
            console.log(`Note id - ${index} removed`)
            this.$emit('remove', index)
        }
    }
}
</script>

<style lang="scss">
.notes{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 40px 0;
}
.note{
    width: 46%;
    padding: 18px 20px;
    margin-bottom: 20px;
    background-color: #FFCD5B;
}

.note-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    p{
        color: #402caf;
        font-size: 24px;
    }
}

.note-body{
    p{
    margin: 20px 0;
    }

    span {
        font-size: 14px;
        color: 999px;
    }
}


</style>