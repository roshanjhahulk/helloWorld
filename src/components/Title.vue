<template>
    <div class="justify-content-center align-self-center font-weight-bold f-400" >
        {{nation}}
    </div>

</template>

<script>
export default {
    name:"Title",
    props:['nation'],
    
}
</script>

<style >
    .f-400{
        font-size:50px !important
    }
</style>