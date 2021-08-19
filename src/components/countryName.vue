<template>
    <div class="container ">
        <div class="d-flex justify-content-between pt-2 m-3">    
            <Title :nation="countryName"/>
            <Flags :nation="countryName"/>   
        </div>
        <div class="d-flex justify-content-between mt-5">
            <Languages class="m-4" :nation="countryName" />
            <Timezones class="m-4" :nation="countryName"/>
            <!-- <Translation class="m-4" :nation="countryName"/> -->
        </div>
    </div>
    
</template>

<script>
    import {useRoute} from 'vue-router';
    import Title from './Title.vue';
    import Flags from './Flags.vue';
    import Languages from './Languages.vue';
    import Timezones from './Timezones.vue';
    // import Translation from './Translation.vue';
    export default {
        name:"countryName",
        components:{Title,Flags,Languages,Timezones},
        data()
        {
            return{
                countryName:''
            }
        },
        mounted()
        {
            const route=useRoute();
            this.countryName=route.params.nation;
        }
    }
</script>

<style>


</style>