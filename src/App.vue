<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/iwlogo.png">
    <!-- <Cars /> -->
    <nav>
      <router-link to="/">Cars</router-link>
      <router-link to="/watches">Watches</router-link>
      <router-link to="/software">Software</router-link>
      <router-link to="/etc">Etc</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>
import Cars from './components/Cars.vue'

export default {
  name: 'app',
  components: {
    Cars
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Rubik|VT323|Yatra+One" rel="stylesheet');

html {
margin: 35px;
height: 100%;
}

body {
  padding: 50px;
  background-color: #F2E4B1;
  /* font-family: 'VT323', monospace; */
  /* font-family: 'Rubik', sans-serif;
  font-family: 'Yatra One', cursive; */
  display: grid;
  margin: 35px;
  height: 100%;
  justify-items: center;
}


img {
  background: linear-gradient(270deg, #58B7B8, #DF6127, #12403E);
  border-radius: 50%;
  animation-name: size-in;
  animation-duration: 2s;
  animation-delay: .1s;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


/* Animations */
@keyframes size-in {
    from {
      transform: scale(.1);
    }
    to {
      transform: scale(1);
    }
}

@keyframes background-move {
     0%{background-position:0% 50%}
     50%{background-position:100% 50%}
     100%{background-position:0% 50%}
 }

 @keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}


</style>
