<template> 
<div>
    <h3>Time Zones</h3>
    <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
        <div v-for="la in zone" :key="la.id">
            <li class="list-group-item">{{la}}</li>
        </div>
        </ul>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
    
    name:"Timezones",
    props:['nation'],
    data() {
        return {
            zone: "",
        };
    },
    updated(){
        axios
        .get("https://restcountries.eu/rest/v2/name/"+this.nation)
        .then((response) => {
            if(this.nation=="India")
            {
                this.zone=((response.data)[1].timezones);
            }
            else
            {
                this.zone=((response.data)[0].timezones);
            }
            console.log(this.zone);
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