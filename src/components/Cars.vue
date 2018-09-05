<template>
  <div class="hello">
    <div class="listName">


      <p>List The Cars You Want</p>
      <ul>
        <li v-for="(data, index) in cars" :key='index'>
          {{ data.car }}
        </li>
      </ul>
      <!-- <p v-if="cars.length >= 1">You entered more than one car</p>
      <p v-else="cars.length >= 1">You entered less than one car</p> -->

    </div>
  </div>
</template>

<script>
export default {
  name: 'Cars',
  data() {
    return {
      car: '',
      cars: [
        { "car": "Lamborghini Countach"},
        { "car": "BMW M8"},
        { "car": "Bugatti Chiron"},
        { "car": "Mercedes-Benz AMG GT"}
      ]
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.listName {
  background: #12403E;
  color: #F8CE3D;
}

p {
  font-family: 'Rubik', sans-serif;
  font-size: 1.4em;
  padding-bottom: 10px;
  box-shadow: 25px 10px #DF6127, -25px -15px #58B7B8;
  padding-top: 20px;
}

ul, li {
  font-family: 'VT323', monospace;
  font-size: 1.1em;
  font-weight: bold;
  background-color: #F8CE3D;
  border: 5px solid #58B7B8;
  margin-bottom: 5px;
  padding: 10px;
  color: #12403E;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

/* input {
  width: calc(100% - 40px);
} */

</style>
