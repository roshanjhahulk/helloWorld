<template>
    
    <img :src="flg" class="card-img-top size" alt="..." />

</template>

<script>
import axios from "axios";
export default {
    
    name:"Flags",
    props:['nation'],
    data() {
        return {
            flg: "",
        };
    },
    updated(){
        axios
        .get("https://restcountries.eu/rest/v2/name/"+this.nation)
        .then((response) => {
            if(this.nation=="India")
            {
                this.flg=((response.data)[1].flag);
            }
            else
            {
                this.flg=((response.data)[0].flag);
            }

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