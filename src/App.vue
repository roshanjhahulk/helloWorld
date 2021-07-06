<template>

  <nav id="navbar-top" class="navbar navbar-light ">
    <div class="container-fluid">
      <a class="navbar-brand wh-color f-20">Countries</a>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search countries" aria-label="Search">
        <button id="submit-bttn" class="btn btn-outline-success wh-color mx-2" type="submit">Search</button>
      </form>
    </div>
  </nav>
  
  <div class="row align-items-center d-flex m-5">
   <Card ></Card>
  </div>
  
  
</template>

<script>
import Card from './components/Card.vue'
export default {
  components: { Card },
  name: 'App',
  component : {
    Card,
  },
  
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

#submit-bttn{
  background:rgb(0, 51, 0);
  
}

</style>
