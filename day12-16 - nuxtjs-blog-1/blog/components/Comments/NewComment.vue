<template>
    <section class="new-comment"> 
        <div class="container">
            <h2 class="title"> New Comment</h2>

            <Message v-if="message" :message="message" />

            <form @submit.prevent="onSubmit" class="contact-form">
                <AppInput v-model="comment.name"> Name: </AppInput>
                <AppTextArea v-model="comment.text"> Text: </AppTextArea>

                <div class="controls">
                    <AppButton class="contactsBtn"> Submit! </AppButton>
                </div>
            </form>
        </div>
    </section>
</template>

<script>

export default {
    
    data() {
        return {
            message: null,
            comment: {
                name: '',
                text: '',
            }
        }
    },
    methods: {
        onSubmit() {
            this.message = 'Submitted!'
            this.comment.name = ''
            
            this.comment.text = ''
        }
    }
}
</script>

<style lang="scss">
.new-comment {
    text-align: center;
    background-color: #9c2b4d;
    color: #fff;
    .title{color: #fff;}
    .contact-form{
        max-width: 600px;
        margin: 30px auto;
    }
    .controls{
        margin: 30px
    }
    .contactsBtn{
        color: #0f0f0f;
        border: 1px solid #0f0f0f;
        background-color: #ffffff;
    }
}
</style>