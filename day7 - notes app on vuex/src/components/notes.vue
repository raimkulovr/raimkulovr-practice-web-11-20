<template>
    <div class="notes" >
            <div class="note" :class="[{full: !grid}, note.priority]" v-for="(note, index) in notes" :key="index">
                <div class="note-header" :class="{full: !grid}">
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
        },
        grid: {
            type: Boolean,
            required: true
        },
        
    },
    methods: {
        removeNote(index){
            //console.log(`Note id - ${index} removed`)
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
    background-color: #f6f0e1;
    
    transition: all .25s cubic-bezier(.02,.01,.47,1);
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.055);
    &:hover{
      box-shadow: 0 30px 30px rgba(0,0,0, 0.055);
      transform: translate(0, -6px);
      transition-delay: 0s !important;  
    }
    &.full{
        width: 100%;
    }
    &.ordinary{
    border:5px solid rgb(54, 224, 111);
    
    }
    &.medium{
    border:5px solid rgb(224, 179, 54);
    }
    &.important{
    border:5px solid rgb(224, 54, 54);
    }
}

.note-header {
        display: flex;
        align-items: center;
        justify-content: space-between;

    h1{
        font-size: 32px;
    }
    p{
        color: #402caf;
        font-size: 24px;
    }
    svg{
        margin-right: 12px; 
        color: #999;
        &.active{
            color: #402caf;
        }
        &:last-child{
            margin-right: 0;
        }
    }
    
}

.note-body{
    p{
    margin: 20px 0;
    }

    span {
        font-size: 14px;
        color: #999;
    }
}



</style>