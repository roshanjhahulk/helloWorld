<template>
  <nav id="navbar-top" class="navbar navbar-light">
    <div class="container-fluid justify-content-center align-self-center">
      <a class="navbar-brand wh-color f-20">{{head}}</a>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "header",
        data(){
          return {
            head:'Countries'
          }
        }
    };
</script>

<style>
#navbar-top{
  background: rgb(48, 119, 48);
}

.wh-color{
  color: white !important;
}

.f-20{
  font-size: 25px !important;
}
</style>