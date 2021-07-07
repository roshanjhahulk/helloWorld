<template>
    <div class="d-flex flex-column">
        <div class="d-flex sticky-top" style="width:400px">
            <input class="form-control me-2" v-model="search" type="search" placeholder="Search countries" aria-label="Search">
        </div>
        <div class="d-flex row">
            <div v-for="country in filteredList" :key="country.id">
                <div class="card shadow m-3" style="width: 18rem;">
                    <img :src="country.flag" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{country.name}}</h5>
                        <div>Capital: {{country.capital}}</div>
                        <div>Native Name: {{country.nativeName}}</div>
                        <div>Continent: {{country.region}}</div>
                        <a href="#" class="mt-2 btn back-col" style="color:white" >Explore</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name : 'Card',
        created(){
            this.getCountry();
        },
        computed: {
            filteredList:function() {
                console.log(this.search);
                return this.countries.filter(country => {
                return country.name.toLowerCase().match(this.search.toLowerCase())
            })
            
            }
         },
        data(){
            return{
                countries :[],
                search : "",
            }
        },
        methods: {
            getCountry(){
                axios.get('https://restcountries.eu/rest/v2/all')
                .then((response)=>{
                    this.countries=response.data;
                    console.log(response.data);
                })
                .catch((response)=>{
                    console.log(response);
                });
            }
        }
    }

</script>

<style>

.back-col{
    background-color: rgb(0, 51, 0) !important;
}

</style>