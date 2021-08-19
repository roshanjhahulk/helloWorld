<template> 
<div>
    <h3>Languages</h3>
    <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
        <div v-for="la in lang" :key="la.id">
            <li class="list-group-item">{{la.name}}</li>
        </div>
        </ul>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
    
    name:"Languages",
    props:['nation'],
    data() {
        return {
            lang: "",
        };
    },
    updated(){
        axios
        .get("https://restcountries.eu/rest/v2/name/"+this.nation)
        .then((response) => {
            if(this.nation=="India")
            {
                this.lang=((response.data)[1].languages);
            }
            else
            {
                this.lang=((response.data)[0].languages);
            }
            console.log(this.lang);
        })
        .catch((response) => {
          console.log(response);
        });
    }
}
</script>

<style >
    .size{
        height:100px;
        width: auto;
    }
</style>