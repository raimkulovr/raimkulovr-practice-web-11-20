<template>
    <div class="message">
        <p>{{message}}</p>
    </div>
</template>

<script>
export default{
    props: {
        message: {
            type: String,
            required: true
        }
    }
}
</script>  

<style lang="scss" scoped>
p {
    color: red;
    text-align: center;
    padding: 10px;
}

</style>