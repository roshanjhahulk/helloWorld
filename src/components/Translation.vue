<template> 
<div>
    <h3>Translation</h3>
    <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
        <div v-for="la in tran" :key="la.id">
            <li class="list-group-item">{{la.name}}</li>
        </div>
        </ul>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
    
    name:"Translation",
    props:['nation'],
    data() {
        return {
            tran: "",
        };
    },
    updated(){
        axios
        .get("https://restcountries.eu/rest/v2/name/"+this.nation)
        .then((response) => {
            if(this.nation=="India")
            {
                this.tran=((response.data)[1].translations);
            }
            else
            {
                this.tran=((response.data)[0].translations);
            }
            console.log(response);
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