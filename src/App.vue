<template>
<div id="app">
  <Header></Header>
   <router-view></router-view>
  
</div>

</template>

<script>
import Header from './components/Header.vue';
export default {
  components: {  Header },
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
