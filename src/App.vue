<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/iwlogo.png">
    <Cars />

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
@import url('https://fonts.googleapis.com/css?family=Rubik|VT323|Yatra+One" rel="stylesheet')

<style>

body {
  background-color: #F2E4B1;
  /* font-family: 'VT323', monospace; */
  /* font-family: 'Rubik', sans-serif;
  font-family: 'Yatra One', cursive; */
  display: grid;
  margin: 35px;
  height: 100%;
  justify-items: center;
}

html {
margin: 35px;
height: 100%;
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
